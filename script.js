const splashScreen = document.getElementById('splashScreen');
const flashlight = document.getElementById('flashlight');
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
const line1 = document.querySelector('.line1');
let isFlashing = false;
let flashInterval;

// Function to start flashing
function flashScreen() {
    flashlight.style.display = 'block';
    toggleButton.style.display = 'block';
    flashlight.style.backgroundColor = 'blue';
    line1.classList.add('flash'); // Add flash class to start text color animation
    flashInterval = setInterval(() => {
        flashlight.style.backgroundColor = flashlight.style.backgroundColor === 'blue' ? 'red' : 'blue';
    }, 450);
}

// Function to stop flashing
function stopFlashScreen() {
    clearInterval(flashInterval);
    flashlight.style.display = 'none';
    line1.classList.remove('flash'); // Remove flash class to stop text color animation
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    if (isFlashing) {
        stopFlashScreen();
        toggleButton.textContent = 'On';
    } else {
        flashScreen();
        toggleButton.textContent = 'Off';
    }
    isFlashing = !isFlashing;
});

// Event listener for the close button
closeButton.addEventListener('click', () => {
    if (window.Android) {
        window.Android.closeWebView(); // Call Android method to close WebView
    } else {
        window.close(); // Attempt to close the window
    }
});

// Function to handle splash screen touch
function handleSplashScreenTouch() {
    splashScreen.style.display = 'none';
    toggleButton.style.display = 'block';
    closeButton.style.display = 'block';
}

// Add touch event listener to splash screen
splashScreen.addEventListener('click', handleSplashScreenTouch);
splashScreen.addEventListener('touchstart', handleSplashScreenTouch);
function handleSplashScreenTouch(event) {
    console.log("Splash screen touched or clicked"); // Debugging statement
    splashScreen.style.display = 'none';
    toggleButton.style.display = 'block';
    closeButton.style.display = 'block';
}

// Add touch event listener to splash screen
splashScreen.addEventListener('click', handleSplashScreenTouch);
splashScreen.addEventListener('touchstart', handleSplashScreenTouch);
