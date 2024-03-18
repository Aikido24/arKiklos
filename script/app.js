window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  console.log(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  // Verificar si el dispositivo es móvil
 
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

  //window.addEventListener('resize', handleResize);
  function ajustarZoomDeCamara() {
    // Cambiar el ancho y el alto del elemento de vídeo
    
    // Cambiar la altura al 100% del contenedor
    let videoElement = document.getElementById('arjs-video');
    videoElement.style.width = '414px'; // Cambiar el ancho al 100% del contenedor
    videoElement.style.height = '896px';
    console.log('videoElement:', videoElement);
  }

  window.addEventListener("arjs-video-loaded", function () {
    setTimeout(ajustarZoomDeCamara, 5000);
  });

  window.addEventListener("camera-init", function () {
    // Ajustar el tamaño de la pantalla inicialmente
    console.log('marker:',Object.keys(scene))
    console.log('marker:',scene.canvas)
    //handleResize();

  });

  marker.addEventListener("markerFound", function () {
    sound.components.sound.data.loop = true;
    sound.components.sound.playSound();
  });

  marker.addEventListener("markerLost", function () {
    sound.components.sound.stopSound();
  });
}

