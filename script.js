document.addEventListener('DOMContentLoaded', () => {
    const pacman = document.getElementById('pacman');
    const container = document.getElementById('game-container');
    let pacmanX = 0;
    let pacmanY = 0;
    const pacmanSpeed = 5;

    function movePacman(x, y) {
        pacmanX += x;
        pacmanY += y;
        pacman.style.left = `${pacmanX}px`;
        pacman.style.top = `${pacmanY}px`;

        // Check collision with food
        checkCollision();
    }

    function checkCollision() {
        const foodItems = document.querySelectorAll('.food');
        foodItems.forEach(food => {
            const foodRect = food.getBoundingClientRect();
            const pacmanRect = pacman.getBoundingClientRect();
            
            if (
                pacmanRect.left < foodRect.left + foodRect.width &&
                pacmanRect.left + pacmanRect.width > foodRect.left &&
                pacmanRect.top < foodRect.top + foodRect.height &&
                pacmanRect.top + pacmanRect.height > foodRect.top
            ) {
                food.remove(); // Eat the food
            }
        });
    }

    function handleKeyPress(event) {
        switch(event.key) {
            case 'ArrowUp':
                movePacman(0, -pacmanSpeed);
                break;
            case 'ArrowDown':
                movePacman(0, pacmanSpeed);
                break;
            case 'ArrowLeft':
                movePacman(-pacmanSpeed, 0);
                break;
            case 'ArrowRight':
                movePacman(pacmanSpeed, 0);
                break;
        }
    }

    document.addEventListener('keydown', handleKeyPress);
});
