loadjs('https://kit.fontawesome.com/91c8580ef2.js')


function loadjs (file) {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = file
  document.body.appendChild(script)
}