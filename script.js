const splashScreen = document.getElementById('splashScreen');
const flashlight = document.getElementById('flashlight');
const toggleButton = document.getElementById('toggleButton');
const line1 = document.querySelector('.line1');
let isFlashing = false;
let flashInterval;

const upperHalf = document.createElement('div');
const lowerHalf = document.createElement('div');
const divider = document.createElement('div');

upperHalf.id = 'upperHalf';
lowerHalf.id = 'lowerHalf';
divider.id = 'divider';

flashlight.appendChild(upperHalf);
flashlight.appendChild(divider);
flashlight.appendChild(lowerHalf);

// Function to start flashing
function flashScreen() {
    flashlight.style.display = 'block';
    toggleButton.style.display = 'block';
    line1.classList.add('flash'); // Add flash class to start text color animation

    flashInterval = setInterval(() => {
        // Flash upper half red and lower half blue, alternating with black
        upperHalf.style.backgroundColor = upperHalf.style.backgroundColor === 'red' ? 'black' : 'red';
        lowerHalf.style.backgroundColor = lowerHalf.style.backgroundColor === 'blue' ? 'black' : 'blue';
    }, 1050);
}

// Function to stop flashing
function stopFlashScreen() {
    clearInterval(flashInterval);
    upperHalf.style.backgroundColor = 'black';
    lowerHalf.style.backgroundColor = 'black';
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
