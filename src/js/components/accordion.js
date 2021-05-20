function initAccordion (element) {
  const collapses = [...element.children]
  let currentTabIndex = -1

  function setTab (index) {
    if (index < 0) {
      return
    }
    if (!collapses[index].classList.contains('collapse-disabled')) {
      if (currentTabIndex > -1 && element.classList.contains('only-one')) {
        if (index !== currentTabIndex) {
          collapses[currentTabIndex].classList.remove('active')
          collapses[index].classList.add('active')
        } else {
          collapses[index].classList.toggle('active')
        }
      } else {
        collapses[index].classList.toggle('active')
      }
      currentTabIndex = index
    }
  }

  defaultTabIndex = collapses.findIndex(x => [...x.classList].indexOf('active') > -1)
  currentTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex
  setTab(currentTabIndex)
  // eslint-disable-next-line
  collapses.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  [...document.querySelectorAll('.accordion')].forEach(x => initAccordion(x))
})();
