// script.js
const grid = document.getElementById('grid');
const gridItems = grid.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#e74c3c';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#3498db';
    });
});