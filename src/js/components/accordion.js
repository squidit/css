function applyDisplay (collapses, index) {
  if (collapses[index].children[0].children[0].children[1]) {
    if (collapses[index].classList.value.includes('active')) {
      collapses[index].children[0].children[0].children[1].style.display = ''
    } else {
      collapses[index].children[0].children[0].children[1].style.display = 'none'
    }
  }
}

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
          applyDisplay(collapses, index)
          collapses[index].classList.toggle('active')
        }
      } else if (!element.classList.contains('only-one')) {
        applyDisplay(collapses, index)
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
