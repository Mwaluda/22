function animateRoad() {
  var road = document.getElementById('road');
  var position = 0;
  var animationInterval;


  if (count<=0){

  function startAnimation() {
      animationInterval = setInterval(function() {
          position -= 1; // This determines the speed of the animation
          road.style.backgroundPosition = position + 'px 0';
      }, 5); // The lower this number, the smoother the animation
  }
  }

  else if(count>=3){
  function stopAnimation() {
     // This determines the speed of the animation
     clearsetInterval(startAnimation);
      road.style.backgroundPosition = '0 0';
  }
  }

  function updateAnimation() {
      if (count === 0) {
          startAnimation();
      } else {
          road.style.backgroundPosition = '0 0';
          stopAnimation();
      }
  }

  // Initially update animation
  updateAnimation();

  // Continuously monitor count and update animation accordingly
  setInterval(function() {
      updateAnimation();
  }, 1000); // Check every second
 // Check every second
}
animateRoad();

