// Simulate a delay (e.g., 3 seconds) before hiding the loading page
setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    // Add code here to display the main content or redirect to another page
}, 3000); // Adjust the delay time as needed (in milliseconds)


// Preload the image before displaying the loading page
var image = new Image();
image.src = 'avatar-1001755181640.jpg';
