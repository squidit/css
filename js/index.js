function loadjs(file) {
  var script = document.createElement("script")
  script.type = "text/javascript"
  script.src = file
  document.body.appendChild(script)
}