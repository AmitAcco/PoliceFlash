const splashScreen = document.getElementById('splashScreen');
const flashlight = document.getElementById('flashlight');
const toggleButton = document.getElementById('toggleButton');
const line1 = document.querySelector('.line1');
const upperHalf = document.getElementById('upperHalf');
const lowerHalf = document.getElementById('lowerHalf');
let isFlashing = false;
let flashInterval;

// Function to start flashing
function flashScreen() {
    flashlight.style.display = 'block';
    toggleButton.style.display = 'block';
    line1.classList.add('flash'); // Add flash class to start text color animation
    flashInterval = setInterval(() => {
        upperHalf.style.backgroundColor = upperHalf.style.backgroundColor === 'red' ? 'black' : 'red';
        lowerHalf.style.backgroundColor = lowerHalf.style.backgroundColor === 'blue' ? 'black' : 'blue';
    }, 1300); // 1000ms on, 300ms off
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

// Function to handle splash screen touch
function handleSplashScreenTouch() {
    splashScreen.style.display = 'none';
    toggleButton.style.display = 'block';
}

// Add touch event listener to splash screen
splashScreen.addEventListener('click', handleSplashScreenTouch);
splashScreen.addEventListener('touchstart', handleSplashScreenTouch);

// Handle back button press
let backPressCount = 0;
document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        backPressCount++;
        if (backPressCount === 2) {
            if (window.Android && typeof window.Android.closeWebView === 'function') {
                window.Android.closeWebView(); // Call Android method to close WebView
            } else {
                console.log("Application closing...");
                // Optionally, you can use navigator.app.exitApp() if running in a Cordova/PhoneGap app
            }
        } else {
            setTimeout(() => {
                backPressCount = 0; // Reset count after a short delay
            }, 2000);
            alert("Press back again to close application");
        }
    }
});
