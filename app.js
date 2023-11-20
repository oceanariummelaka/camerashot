var screenshot_button = document.getElementById('screenshot_button')

screenshot_button.addEventListener('click', function() {
  var scene = document.querySelector('a-scene').components.screenshot.getCanvas('equirectangular');})