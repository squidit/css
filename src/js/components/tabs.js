function tabify (element) {
  const header = element.querySelector('.tabs-header')
  const content = element.querySelector('.tabs-wrapper-content')
  const tabHeaders = [...header.children]
  const tabContents = [...content.children]
  let currentTabIndex = -1

  function setTab (index) {
    if (currentTabIndex > -1) {
      tabHeaders[currentTabIndex].classList.remove('active')
      tabContents[currentTabIndex].classList.remove('active')
    }
    tabContents[index].classList.add('active')
    tabHeaders[index].classList.add('active')
    currentTabIndex = index
  }

  defaultTabIndex = tabHeaders.findIndex(x => [...x.classList].indexOf('default-gator-tab') > -1)

  defaultTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex
  setTab(defaultTabIndex)
  // eslint-disable-next-line
  tabHeaders.forEach((x, i) => x.onclick = event => setTab(i))
}

(function () {
  [...document.querySelectorAll('.tabs-container')].forEach(x => tabify(x))
})();
