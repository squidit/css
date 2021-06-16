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
