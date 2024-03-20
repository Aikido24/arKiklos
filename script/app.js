window.addEventListener("DOMContentLoaded", gameLoop);
let arjsComponent;

function gameLoop() {
  
 
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');
  let divOverlay = document.getElementById('div-overlay'); 
  let whatsapp = document.getElementById('whatsapp'); 
  let instagram = document.getElementById('instagram'); 
  let pdf = document.getElementById('pdf'); 
  let webPage = document.getElementById('webPage'); 

  


  marker.addEventListener("markerFound", function () {
    //sound.components.sound.data.loop = true;
    //sound.components.sound.playSound();
    divOverlay.style.visibility = 'hidden'
    whatsapp.style.visibility = 'visible'
    instagram.style.visibility = 'visible'
    pdf.style.visibility = 'visible'
    webPage.style.visibility = 'visible'
  });

  marker.addEventListener("markerLost", function () {
   // sound.components.sound.stopSound();
    divOverlay.style.visibility = 'visible'
    whatsapp.style.visibility = 'hidden'
    instagram.style.visibility = 'hidden'
    pdf.style.visibility = 'hidden'
    webPage.style.visibility = 'hidden'
  });
}

