window.addEventListener("DOMContentLoaded", gameLoop);
const animate = ["./photos/Mario.webp", "./photos/Bowser_1400x.webp"];
let time = 0;

function gameLoop() {
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');//document.querySelector('#sonido');
  let scene = document.querySelector('a-scene');
  // Obtener el componente arjs de la escena
  let arjsComponent = scene.getAttribute('arjs');
  arjsComponent= `${arjsComponent} displayWidth: ${Math.floor(window.innerWidth*0.5)}; displayHeight: ${Math.floor(window.innerHeight*0.5)};`
  
  function handleResize() {
    // Obtener el ancho y el alto de la pantalla después de la rotación
   // arjsComponent= `${arjsComponent} displayWidth: ${Math.floor(window.innerWidth*0.5)}; displayHeight: ${Math.floor(window.innerHeight*0.5)};`
   console.log('handleResize')

  }
  window.addEventListener('resize', handleResize);
  window.addEventListener("camera-init", function () {
    // Muestra el contenido cuando se detecta el marcador
    //console.log(sound.components.sound)
   // arjsComponent.displayWidth = Math.floor(window.innerWidth*0.5);
   // arjsComponent.displayHeight = Math.floor(window.innerHeight*0.5);
   // arjsComponent= `${arjsComponent} displayWidth: ${Math.floor(window.innerWidth*0.5)}; displayHeight: ${Math.floor(window.innerHeight*0.5)};`
   scene.setAttribute('arjs',arjsComponent);
    console.log('camera-init:', scene)
   
  });
  marker.addEventListener("markerFound", function () {
    // Muestra el contenido cuando se detecta el marcador
    //console.log(sound.components.sound)
    console.log('arjsComponent:', arjsComponent)
    sound.components.sound.data.loop=true;
    sound.components.sound.playSound();
  });
  marker.addEventListener("markerLost", function () {
    
    sound.components.sound.stopSound();
  });
}

