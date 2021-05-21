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
