window.addEventListener("DOMContentLoaded", gameLoop);
const animate = ["./photos/Mario.webp", "./photos/Bowser_1400x.webp"];
let time = 0;

function gameLoop() {
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');//document.querySelector('#sonido');
  let scene = document.querySelector('a-scene');
  // Obtener el componente arjs de la escena
  let arjsComponent = scene.getAttribute('arjs');
  arjsComponent.displayWidth = screen.height*0.7s;
  arjsComponent.displayHeight = screen.width*0.7;
  
  marker.addEventListener("markerFound", function () {
    // Muestra el contenido cuando se detecta el marcador
    //console.log(sound.components.sound)
    console.log('arjsComponent:',arjsComponent)
    sound.components.sound.data.loop=true;
    sound.components.sound.playSound();
  });
  marker.addEventListener("markerLost", function () {
    
    sound.components.sound.stopSound();
  });
}
