function gameLoop() {
  let marker = document.querySelector("a-marker");
  let sound = document.querySelector('[sound]');
  let scene = document.querySelector('a-scene');
  let arjsComponent = scene.getAttribute('arjs');
  // Añade los valores iniciales de displayWidth y displayHeight
  if (!arjsComponent.includes('displayWidth') && !arjsComponent.includes('displayHeight')) {
    arjsComponent += ` displayWidth: ${Math.floor(window.innerWidth * 0.5)}; displayHeight: ${Math.floor(window.innerHeight * 0.5)};`;
  }

  function handleResize() {
    console.log('handleResize');
    // Actualiza el tamaño del componente AR solo si no se ha actualizado antes
    if (!arjsComponent.includes('displayWidth') && !arjsComponent.includes('displayHeight')) {
      arjsComponent += ` displayWidth: ${Math.floor(window.innerWidth * 0.5)}; displayHeight: ${Math.floor(window.innerHeight * 0.5)};`;
      scene.setAttribute('arjs', arjsComponent);
    }
  }

  window.addEventListener('resize', handleResize);

  window.addEventListener("camera-init", function () {
    scene.setAttribute('arjs', arjsComponent);
    console.log('camera-init:', scene);
  });

  marker.addEventListener("markerFound", function () {
    console.log('arjsComponent:', arjsComponent);
    sound.components.sound.data.loop = true;
    sound.components.sound.playSound();
  });

  marker.addEventListener("markerLost", function () {
    sound.components.sound.stopSound();
  });
}

