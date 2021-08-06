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
