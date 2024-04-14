/*function RoadAnimator(roadId, initialPosition, speed) {
    var road = document.getElementById(roadId);
    var position = initialPosition;
    var intervalId;

    function moveRoad() {
        position -= speed;
        road.style.backgroundPosition = position + 'px 0';
    }

    this.startAnimation = function() {
        if (!road) {
            console.error("Road element not found!");
            return;
        }
        intervalId = setInterval(moveRoad, 100); // Adjust the interval as needed
    };

    this.stopAnimation = function() {
        clearInterval(intervalId);
        road.style.backgroundPosition = '0 0';
    };
}

// Example usage:
var roadAnimator = new RoadAnimator('road', 0, 20); // Adjust initial position and speed
// Replace with your actual count value (from the camera)
var count = getCount(); // Assuming getCount() is a function to get the count value
if (count === 0) {
    roadAnimator.startAnimation();
} else {
    roadAnimator.stopAnimation();
}

function getCount() {
    // Replace this with your actual code to get the count value
    return 0; // Placeholder value, replace with your logic
}
