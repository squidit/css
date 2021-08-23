// Global Variables or functions here
function initAccordion (element) {
  const collapses = [...element.children]
  let currentTabIndex = 0

  function setTab (index) {
    if (index < 0) {
      return
    }
    if (collapses[index] && !collapses[index].classList.contains('collapse-disabled')) {
      if (currentTabIndex > -1) {
        if (element.classList.contains('only-one') && index !== currentTabIndex) {
          collapses[currentTabIndex].classList.remove('active')
          collapses[index].classList.add('active')
        } else {
          collapses[index].classList.toggle('active')
        }
      } else if (!element.classList.contains('only-one')) {
        collapses[index].classList.toggle('active')
      }
      currentTabIndex = index
    }
  }

  defaultTabIndex = collapses.findIndex(x => [...x.classList].indexOf('active') > -1)
  setTab(defaultTabIndex)
  // eslint-disable-next-line
  collapses.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  [...document.querySelectorAll('[data-accordion]')].forEach(x => initAccordion(x))
})();

(function () {
  'use strict'
  let toClose = false

  document.addEventListener('click', function (e) {
    if (
      e.target.hasAttribute('data-dropdown') &&
      e.target.getAttribute('data-dropdown') !== 'false' &&
      e.target.getAttribute('data-dropdown') !== 'disabled'
    ) {
      if (e.target.classList.contains('dropdown-open')) {
        e.target.classList.remove('dropdown-open')
        closeDropdown(e)
      } else {
        e.target.classList.add('dropdown-open')
        openDropdown(e)
      }
    }
  })

  window.onclick = function (event) {
    if (toClose && toClose.classList) {
      const button = getButtonDropdownToClose(toClose)
      if (button && !button.contains(event.target) && !toClose.contains(event.target)) {
        button.classList.remove('dropdown-open')
        button.removeAttribute('data-dropdown-open')
        document.body.removeChild(toClose)
        toClose = false
      }
    }
  }

  function getButtonDropdownToClose (toClose) {
    const count = [...toClose.classList].find((className) => {
      return className.startsWith('dropdown-count')
    }).split('-')[2]
    return document.querySelector(`[data-dropdown-open="${count}"]`)
  }

  function closeDropdown (e) {
    if (e.target.hasAttribute('data-dropdown')) {
      toClose = false
      const numberDropdown = e.target.getAttribute('data-dropdown-open')
      setTimeout(function () {
        if (document.querySelector(`.dropdown-count-${numberDropdown}`)) {
          document.body.removeChild(document.querySelector(`.dropdown-count-${numberDropdown}`))
          e.target.removeAttribute('data-dropdown-open')
        }
      })
    }
  }

  function positionAt (parent, dropdown, posHorizontal, posVertical, distance) {
    const parentCoords = parent.getBoundingClientRect()
    let left
    let top
    switch (posHorizontal) {
      case 'left':
        left = parseInt(parentCoords.right) - dropdown.offsetWidth
        break
      // eslint-disable-next-line
      default:
      case 'right':
        left = parseInt(parentCoords.left)
    }

    switch (posVertical) {
      case 'bottom':
        top = parseInt(parentCoords.bottom) + distance
        break
      // eslint-disable-next-line
      default:
      case 'top':
        top = parseInt(parentCoords.top) - dropdown.offsetHeight - distance
    }

    left = (left < 0) ? parseInt(parentCoords.left) : left
    top = (top < 0) ? (parseInt(parentCoords.bottom) + distance) : top

    dropdown.style.left = left + 'px'
    dropdown.style.top = top + pageYOffset + 'px'
  }

  function openDropdown (e) {
    if (
      !e.target.hasAttribute('data-dropdown') ||
      e.target.getAttribute('data-dropdown') === 'false' ||
      e.target.getAttribute('data-dropdown') === 'disabled'
    ) {
      return
    }
    if (toClose && toClose.classList) {
      const button = getButtonDropdownToClose(toClose)
      button.classList.remove('dropdown-open')
      button.removeAttribute('data-dropdown-open')
      document.body.removeChild(toClose)
      toClose = false
    }
    let menu = e.target.nextSibling
    let foundDropdown = false
    while (!foundDropdown) {
      if (!menu || (menu.classList && menu.classList.contains('dropdown'))) {
        foundDropdown = true
        break
      }
      menu = menu.nextSibling
    }
    if (!menu || !menu.classList || (menu.classList && !menu.classList.contains('dropdown'))) {
      return
    }
    const className = e.target.getAttribute('data-dropdown-class') || ''
    const distance = e.target.getAttribute('data-dropdown-distance') || 3
    const width = e.target.getAttribute('data-dropdown-width') || e.target.offsetWidth
    const pos = e.target.getAttribute('data-dropdown-position') || 'right bottom'
    const dropdown = menu.cloneNode(true)
    const dropdownCount = (document.querySelectorAll('.dropdown.dropdown-generated').length + 1) || 1
    dropdown.className = `dropdown open dropdown-generated ${className} dropdown-count-${dropdownCount} dropdown-${pos.replace(' ', '-')}`
    e.target.setAttribute('data-dropdown-open', dropdownCount)
    dropdown.append(e.target.getAttribute('data-dropdown'))

    document.body.appendChild(dropdown)
    toClose = dropdown

    const posHorizontal = pos.split(' ')[0] || 'right'
    const posVertical = pos.split(' ')[1] || 'bottom'
    dropdown.style.width = width + 'px'

    positionAt(e.target, dropdown, posHorizontal, posVertical, distance)
  }
})();

const modals = document.querySelectorAll('[data-modal]')
modals.forEach(function (trigger) {
  trigger.addEventListener('click', (event) => createModal(event, trigger))
});

function createModal (event, trigger) {
  event.preventDefault()
  const modal = document.getElementById(trigger.dataset.modal)
  const backdrop = document.createElement('div')
  backdrop.setAttribute('id', 'modal-backdrop')
  backdrop.setAttribute('class', 'modal-backdrop show')
  document.body.appendChild(backdrop)
  const body = document.getElementsByTagName('body')[0]
  body.classList.add('block')
  modal.style.display = 'flex'
  setTimeout(() => {
    modal.classList.add('open')
  }, 100)
  const exits = modal.querySelectorAll('.modal-exit')
  exits.forEach(function (exit) {
    exit.addEventListener('click', function (event) {
      event.preventDefault()
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop)
      }
      modal.classList.remove('open')
      setTimeout(() => {
        modal.style.display = 'none'
        body.classList.remove('block')
      }, 500)
    })
  })
};

function tabify (element) {
  const header = element.querySelector('.tabs-header') || { children: [] }
  const content = element.querySelector('.tabs-wrapper-content') || { children: [] }
  const tabHeaders = [...header.children]
  const tabContents = [...content.children]
  let currentTabIndex = -1

  function setTab (index) {
    if (index < 0) {
      return
    }
    if (tabHeaders[index] && !tabHeaders[index].classList.contains('disabled')) {
      if (currentTabIndex > -1) {
        if (tabHeaders[currentTabIndex]) {
          tabHeaders[currentTabIndex].classList.remove('active')
        }
        if (tabContents[currentTabIndex]) {
          tabContents[currentTabIndex].classList.remove('active')
        }
      }
      if (tabContents[index]) {
        tabContents[index].classList.add('active')
      }
      if (tabHeaders[index]) {
        tabHeaders[index].classList.add('active')
      }
      currentTabIndex = index
    }
  }

  defaultTabIndex = tabHeaders.findIndex(x => [...x.classList].indexOf('active') > -1)
  currentTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex
  setTab(currentTabIndex)
  // eslint-disable-next-line
  tabHeaders.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  [...document.querySelectorAll('[data-tabs]')].forEach(x => tabify(x))
})();

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

(function () {
  'use strict'
  document.body.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') === 'click') {
      if (e.target.classList.contains('tooltip-open')) {
        e.target.classList.remove('tooltip-open')
        removeTooltip(e)
      } else {
        e.target.classList.add('tooltip-open')
        createTooltip(e)
      }
    }
  })

  document.body.addEventListener('mouseover', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') !== 'click') {
      createTooltip(e)
    }
  })

  document.body.addEventListener('mouseout', function (e) {
    if (e.target.hasAttribute('data-tooltip') && e.target.getAttribute('data-tooltip-trigger') !== 'click') {
      removeTooltip(e)
    }
  })

  function createTooltip (e) {
    if (!e.target.hasAttribute('data-tooltip')) {
      return
    }
    const theme = e.target.getAttribute('data-tooltip-theme') || 'dark'
    const distance = e.target.getAttribute('data-tooltip-distance') || 7
    const pos = e.target.getAttribute('data-tooltip-position') || 'center bottom'
    const tooltip = document.createElement('div')
    const tooltipArrow = document.createElement('div')
    const tooltipCount = (document.querySelectorAll('.tooltip.tooltip-generated').length + 1) || 1
    tooltip.className = `tooltip tooltip-generated tooltip-${theme} tooltip-${tooltipCount} tooltip-${pos.replace(' ', '-')}`
    e.target.setAttribute('data-tooltip-open', tooltipCount)
    tooltipArrow.className = 'tooltip-arrow'
    tooltip.appendChild(tooltipArrow)
    tooltip.append(e.target.getAttribute('data-tooltip'))

    document.body.appendChild(tooltip)

    const posHorizontal = pos.split(' ')[0]
    const posVertical = pos.split(' ')[1]

    positionAt(e.target, tooltip, posHorizontal, posVertical, distance)
  }

  function removeTooltip (e) {
    if (e.target.hasAttribute('data-tooltip')) {
      const delay = e.target.getAttribute('data-tooltip-delay')
      const numberTooltip = e.target.getAttribute('data-tooltip-open')
      setTimeout(function () {
        if (document.querySelector(`.tooltip-${numberTooltip}`)) {
          document.body.removeChild(document.querySelector(`.tooltip-${numberTooltip}`))
        }
        e.target.removeAttribute('data-tooltip-open')
      }, delay || 0)
    }
  }

  function positionAt (parent, tooltip, posHorizontal, posVertical, distance) {
    const parentCoords = parent.getBoundingClientRect()
    let left
    let top

    switch (posHorizontal) {
      case 'left':
        left = parseInt(parentCoords.left) - distance - tooltip.offsetWidth
        if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
          left = distance
        }
        break

      case 'right':
        left = parentCoords.right + distance
        if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
          left = document.documentElement.clientWidth - tooltip.offsetWidth - distance
        }
        break
      // eslint-disable-next-line
      default:
      case 'center':
        left = parseInt(parentCoords.left) + ((parent.offsetWidth - tooltip.offsetWidth) / 2)
    }

    switch (posVertical) {
      case 'center':
        top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2
        break

      case 'bottom':
        top = parseInt(parentCoords.bottom) + distance
        break
      // eslint-disable-next-line
      default:
      case 'top':
        top = parseInt(parentCoords.top) - tooltip.offsetHeight - distance
    }

    left = (left < 0) ? parseInt(parentCoords.left) : left
    top = (top < 0) ? parseInt(parentCoords.bottom) + distance : top

    tooltip.style.left = left + 'px'
    tooltip.style.top = top + scrollY + 'px'
  }
})();

// // Listen all events on document/window
const liveDom = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.hasAttribute) {
        if (node.hasAttribute('data-tabs')) {
          tabify(node)
        }
        if (node.hasAttribute('data-accordion')) {
          initAccordion(node)
        }
        if (node.hasAttribute('data-modal')) {
          node.addEventListener('click', (event) => createModal(event, node))
        }
      }
    })
  })
});

// To use live Realod Components
// liveDom.observe((document.documentElement || document.body), {
//   attributes: true,
//   childList: true,
//   subtree: true,
//   characterData: true
// });

function loadScript (file) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = file
  document.body.appendChild(script)
}
