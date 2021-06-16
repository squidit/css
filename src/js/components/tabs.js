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
