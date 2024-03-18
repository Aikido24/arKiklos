window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  
 
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');
  
  
 

  


  marker.addEventListener("markerFound", function () {
    sound.components.sound.data.loop = true;
    sound.components.sound.playSound();
  });

  marker.addEventListener("markerLost", function () {
    sound.components.sound.stopSound();
  });
}

