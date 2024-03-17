window.addEventListener("DOMContentLoaded", gameLoop);
const animate = ["./photos/Mario.webp", "./photos/Bowser_1400x.webp"];
let time = 0;

function gameLoop() {
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');//document.querySelector('#sonido');
  
  marker.addEventListener("markerFound", function () {
    // Muestra el contenido cuando se detecta el marcador
    console.log(sound.components.sound)
    sound.components.sound.data.loop=true;
    sound.components.sound.playSound();
  });
  marker.addEventListener("markerLost", function () {
    
    sound.components.sound.stopSound();
  });
}
