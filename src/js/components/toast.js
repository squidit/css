(function () {
  'use strict'
  // Toast class based from https://github.com/talsu/vanilla-toast
  const Toast = (function () {
    function Toast () {
      this.queue = new TaskQueue()
      this.cancellationTokens = []
      this.element = null
    }

    const constants = {
      default: {
        className: '',
        fadeDuration: 400,
        fadeInterval: 16,
        duration: 2000,
        closeButton: false,
        immediately: false
      },
      success: {
        className: ''
      },
      inverted: {
        className: ''
      },
      info: {
        className: ''
      },
      warning: {
        className: ''
      },
      grayscale: {
        className: ''
      },
      custom: {
        className: ''
      },
      error: {
        className: '',
        duration: 3000,
        closeButton: true
      }
    }

    Toast.prototype.initElement = function (selector) {
      const container = document.createElement('div')
      const toastBox = document.createElement('div')
      const text = document.createElement('div')
      const closeButton = document.createElement('span')

      container.setAttribute('id', 'toast-container')
      container.setAttribute('class', 'toast-container')

      toastBox.setAttribute('id', 'toast')
      toastBox.setAttribute('class', 'toast')

      text.setAttribute('id', 'toast-text')
      text.setAttribute('class', 'toast-text')

      closeButton.setAttribute('id', 'toast-close-button')
      closeButton.setAttribute('class', 'toast-close-button')
      closeButton.innerHTML = '&#10006'

      toastBox.appendChild(text)
      toastBox.appendChild(closeButton)
      container.appendChild(toastBox)

      if (selector) {
        document.getElementById(seletor).appendChild(containter)
      } else {
        document.body.appendChild(container)
      }

      this.element = {
        container: container,
        toastBox: toastBox,
        text: text,
        closeButton: closeButton
      }

      _setStyle(this, 'default', constants.default)
    }

    Toast.prototype.cancel = function () {
      if (this.cancellationTokens.length) this.cancellationTokens[0].cancel()
    }

    Toast.prototype.cancelAll = function () {
      const length = this.cancellationTokens.length
      for (let i = 0; i < length; i++) {
        (function (token) {
          token.cancel()
        })(this.cancellationTokens[length - i - 1])
      }
    }

    Toast.prototype.show = function (text, option, preset, callback) {
      const self = this
      if (!self.element) self.initElement()
      if (!option) option = {}
      if (option.immediately) self.cancelAll()

      const cancellationToken = new CancellationToken()
      self.queue.enqueue(function (next) {
        const fadeDuration = option.fadeDuration || constants.default.fadeDuration
        const fadeInterval = option.fadeInterval || constants.default.fadeInterval
        const fadeStep = Math.min(fadeInterval / fadeDuration, 1)
        const duration = option.duration || constants.default.duration

        self.element.closeButton.style.display =
          option.closeButton ? 'inline-block' : 'none'

        self.element.text.innerHTML = text

        const s = self.element.toastBox.style
        s.opacity = 0
        s.display = 'inline-grid'

        self.element.container.className = `toast-container ${(option && option.position) ? option.position : ''} ${option.closeButton ? 'has-close' : ''}`

        _setStyle(self, preset, option)

        let timeoutId = null

        const timeoutCallback = function () {
          timeoutId = null
          self.element.toastBox.removeEventListener('click', cancelHandler)
          _hide(self, option, cancellationToken, function () {
            if (callback) callback()
            self.cancellationTokens.shift().dispose()
            next()
          })
        }

        const cancelHandler = function () {
          if (!timeoutId) return
          clearTimeout(timeoutId)
          timeoutCallback()
        }

        _fade(s, fadeStep, fadeInterval, cancellationToken, function () {
          self.element.toastBox.addEventListener('click', cancelHandler)
          if (cancellationToken.isCancellationRequested) {
            timeoutCallback()
          } else {
            timeoutId = setTimeout(timeoutCallback, duration)
            cancellationToken.register(function () {
              cancelHandler()
            })
          }
        })
      })

      self.cancellationTokens.push(cancellationToken)

      return self
    }

    for (const item in constants) {
      (function (preset) {
        Toast.prototype[preset] = function (text, option, callback) {
          if (!option) option = {}

          for (const propertyName in constants[preset]) {
            if (option[propertyName] === undefined) {
              option[propertyName] = constants[preset][propertyName]
            }
          }

          return this.show(text, option, preset, callback)
        }
      })(item)
    }

    function _setStyle (self, preset, option) {
      self.element.toastBox.className = `toast ${preset || 'default'} ${option.className || constants.default.className}`
    }

    function _hide (self, option, cancellationToken, callback) {
      if (!option) option = {}

      const fadeDuration = option.fadeDuration || constants.default.fadeDuration
      const fadeInterval = option.fadeInterval || constants.default.fadeInterval
      const fadeStep = Math.min(fadeInterval / fadeDuration, 1)

      const s = self.element.toastBox.style
      s.opacity = 1

      _fade(s, -fadeStep, fadeInterval, cancellationToken, function () {
        s.display = 'none'
        if (callback) callback()
      })

      return self
    }

    function _fade (style, step, interval, cancellationToken, callback) {
      (function fade () {
        if (cancellationToken.isCancellationRequested) {
          style.opacity = step < 0 ? 0 : 1
          if (callback) callback()
          return
        }
        style.opacity = Number(style.opacity) + step
        if (step < 0 && style.opacity < 0) {
          if (callback) callback()
        } else if (step > 0 && style.opacity >= 1) {
          if (callback) callback()
        } else {
          let timeoutId = setTimeout(function () {
            timeoutId = null
            fade()
          }, interval)
          cancellationToken.register(function () {
            if (!timeoutId) return
            clearTimeout(timeoutId)
            timeoutId = null
            if (callback) callback()
          })
        }
      })()
    }

    return Toast
  })()

  const CancellationToken = (function () {
    function CancellationToken () {
      this.isCancellationRequested = false
      this.cancelCallbacks = []
    }

    CancellationToken.prototype.cancel = function () {
      this.isCancellationRequested = true
      const copiedCallbacks = this.cancelCallbacks.slice()
      while (copiedCallbacks.length) copiedCallbacks.shift()()
    }

    CancellationToken.prototype.register = function (callback) {
      this.cancelCallbacks.push(callback)
    }

    CancellationToken.prototype.dispose = function () {
      while (this.cancelCallbacks.length) this.cancelCallbacks.shift()
    }

    return CancellationToken
  })()

  // TaskQueue class from https://github.com/talsu/async-task-queue
  const TaskQueue = (function () {
    function TaskQueue () {
      this.queue = []
      this.isExecuting = false
    }
    TaskQueue.prototype.enqueue = function (job) {
      this.queue.push(job)
      dequeueAndExecute(this)
    }

    function dequeueAndExecute (self) {
      if (self.isExecuting) return
      const job = self.queue.shift()
      if (!job) return
      self.isExecuting = true
      job(function () {
        self.isExecuting = false
        dequeueAndExecute(self)
      })
    }

    return TaskQueue
  })()

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = new Toast()
    }
    exports.Toast = new Toast()
  } else {
    this.Toast = new Toast()
  }
}.call(this));
