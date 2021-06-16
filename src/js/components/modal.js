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
