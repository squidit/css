if (typeof window !== 'undefined') {
  window.onload = function () {
    renderColors();
    renderButtons();
    renderTokenRoles();
    renderTokens();
    (function () {
      [...document.querySelectorAll('[data-accordion]')].forEach(x => initAccordion(x))
    })();
  };
}
