window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  
 
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');
  let divOverlay = document.getElementById('div-overlay'); 
  
 

  


  marker.addEventListener("markerFound", function () {
    sound.components.sound.data.loop = true;
    sound.components.sound.playSound();
    divOverlay.style.visibility = 'hidden'
  });

  marker.addEventListener("markerLost", function () {
    sound.components.sound.stopSound();
    divOverlay.style.visibility = 'visible'
  });
}

