function animateRoad() {
    var road = document.getElementById('road');
    var position = 0;
    var intervalId; // Store the interval ID to clear it later

    function moveRoad() {
        position -= 20; // This determines the speed of the animation
        road.style.backgroundPosition = position + 'px 0';
    }

    function startAnimation() {
        intervalId = setInterval(moveRoad, 100); // Adjust the interval as needed
    }

    function stopAnimation() {
        clearInterval(intervalId);
        road.style.backgroundPosition = '0 0';
    }

    // Example usage:
    var count = 0; // Replace with your actual count value (from the camera)
    if (count === 0) {
        startAnimation();
    } else {
        stopAnimation();
    }
}

// Call the function initially
animateRoad();
