const splashScreen = document.getElementById('splashScreen');
const flashlight = document.getElementById('flashlight');
const toggleButton = document.getElementById('toggleButton');
const line1 = document.querySelector('.line1');
let isFlashing = false;
let flashInterval;
let backPressCount = 0;

// Function to start flashing
function flashScreen() {
    flashlight.style.display = 'block';
    toggleButton.style.display = 'block';
    line1.classList.add('flash'); // Add flash class to start text color animation
    flashInterval = setInterval(() => {
        flashlight.style.backgroundColor = flashlight.style.backgroundColor === 'blue' ? 'red' : 'blue';
    }, 1300);
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

// Handle back button press on Android devices
document.addEventListener('backbutton', () => {
    backPressCount += 1;
    if (backPressCount === 2) {
        if (window.Android) {
            window.Android.closeWebView(); // Call Android method to close WebView
        }
    } else {
        alert('Click back twice to close the application');
        setTimeout(() => { backPressCount = 0; }, 2000);
    }
}, false);

// Function to handle splash screen touch
function handleSplashScreenTouch() {
    splashScreen.style.display = 'none';
    toggleButton.style.display = 'block';
}

// Add touch event listener to splash screen
splashScreen.addEventListener('click', handleSplashScreenTouch);
splashScreen.addEventListener('touchstart', handleSplashScreenTouch);
