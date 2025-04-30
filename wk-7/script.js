const animatedBox = document.getElementById('animatedBox');

// Check localStorage for animation state
if (localStorage.getItem('isRotating') === 'true') {
    animatedBox.classList.add('rotate');
}

// Function to toggle rotation on double-click
animatedBox.addEventListener('dblclick', () => {
    if (animatedBox.classList.contains('rotate')) {
        animatedBox.classList.remove('rotate');
        localStorage.setItem('isRotating', 'false');
    } else {
        animatedBox.classList.add('rotate');
        localStorage.setItem('isRotating', 'true');
    }
});