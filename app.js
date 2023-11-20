var screenshot_button = document.getElementById('screenshot_button')

screenshot_button.addEventListener('click', function() {
  var scene = document.querySelector('a-scene')
  var canvasData = scene.renderer.domElement.toDataURL('image/png')
  window.location = canvasData
})