window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');
  let scene = document.querySelector('a-scene');

  function handleResize() {
    // Verificar si la pantalla está en orientación apaisada
    const isLandscape = window.innerWidth > window.innerHeight;

    // Ajustar el componente arjs para coincidir con las nuevas dimensiones de la pantalla
    arjsComponent = scene.getAttribute('arjs');
    arjsComponent += ` displayWidth: ${isLandscape ? window.innerWidth : Math.floor(window.innerWidth * 0.5)};`;
    arjsComponent += ` displayHeight: ${isLandscape ? window.innerHeight : Math.floor(window.innerHeight * 0.5)};`;
    scene.setAttribute('arjs', arjsComponent);
  }

  window.addEventListener('resize', handleResize);

  window.addEventListener("camera-init", function () {
    // Ajustar el tamaño de la pantalla inicialmente
    handleResize();
  });

  marker.addEventListener("markerFound", function () {
    sound.components.sound.data.loop = true;
    sound.components.sound.playSound();
  });

  marker.addEventListener("markerLost", function () {
    sound.components.sound.stopSound();
  });
}

