document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.getElementById('splash-screen');
    const mainScreen = document.getElementById('main-screen');
    const upperScreen = document.getElementById('upper-screen');
    const lowerScreen = document.getElementById('lower-screen');
    const toggleBtn = document.getElementById('toggle-btn');
    const backPopup = document.getElementById('back-popup');

    let isOn = false;
    let backPressedOnce = false;

    // Move to the main screen on touch
    splashScreen.addEventListener('click', function () {
        splashScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
    });

    // Toggle On/Off button
    toggleBtn.addEventListener('click', function () {
        if (isOn) {
            toggleBtn.textContent = 'On';
            upperScreen.style.backgroundColor = 'black';
            lowerScreen.style.backgroundColor = 'black';
        } else {
            toggleBtn.textContent = 'Off';
            upperScreen.style.backgroundColor = 'blue';
            lowerScreen.style.backgroundColor = 'red';
        }
        isOn = !isOn;
    });

    // Handle back button press
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace' || event.key === 'Escape') {
            if (backPressedOnce) {
                window.close(); // Close app logic; this may differ based on the environment
            } else {
                backPressedOnce = true;
                backPopup.classList.remove('hidden');
                setTimeout(() => {
                    backPressedOnce = false;
                    backPopup.classList.add('hidden');
                }, 2000);
            }
        }
    });
});
