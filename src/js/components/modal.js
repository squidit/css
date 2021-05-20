const modals = document.querySelectorAll('[data-modal]')
modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault()
    const modal = document.getElementById(trigger.dataset.modal)
    const backdrop = document.createElement('div')
    backdrop.setAttribute('id', 'modal-backdrop')
    backdrop.setAttribute('class', 'modal-backdrop show')
    document.body.appendChild(backdrop)
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('block')
    modal.classList.add('open')
    const exits = modal.querySelectorAll('.modal-exit')
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault()
        modal.classList.remove('open')
        backdrop.parentNode.removeChild(backdrop)
        body.classList.remove('block')
      })
    })
  })
});
