if (typeof window !== 'undefined') {
  window.onload = function () {
    renderColors();
    renderButtons();
    (function () {
      [...document.querySelectorAll('[data-accordion]')].forEach(x => initAccordion(x))
    })();
  };
}
