// script.js
document.addEventListener("DOMContentLoaded", function() {
    
    const gridItems = document.querySelectorAll('.grid-item');

    const itemText = [
        ["8µL ConA MM", "8µL ConA MM", "8µL ConC MM", "8µL ConC MM", "8µL H1 MM", "8µL H1 MM", "8µL H2 MM", "8µL H2 MM", "8µL H3 MM", "8µL H3 MM", "8µL H4 MM", "8µL H4 MM"],
        ["8µL ConA MM", "8µL ConA MM", "8µL ConC MM", "8µL ConC MM", "8µL H1 MM", "8µL H1 MM", "8µL H2 MM", "8µL H2 MM", "8µL H3 MM", "8µL H3 MM", "8µL H4 MM", "8µL H4 MM"],
        ["8µL ConA MM", "8µL ConA MM", "8µL ConC MM", "8µL ConC MM", "8µL H1 MM", "8µL H1 MM", "8µL H2 MM", "8µL H2 MM", "8µL H3 MM", "8µL H3 MM", "8µL H4 MM", "8µL H4 MM"],
        ["8µL ConA MM", "8µL ConA MM", "8µL ConC MM", "8µL ConC MM", "8µL H1 MM", "8µL H1 MM", "8µL H2 MM", "8µL H2 MM", "8µL H3 MM", "8µL H3 MM", "8µL H4 MM", "8µL H4 MM"],
        ["8µL ConA MM", "8µL ConA MM", "8µL ConC MM", "8µL ConC MM", "8µL H1 MM", "8µL H1 MM", "8µL H2 MM", "8µL H2 MM", "8µL H3 MM", "8µL H3 MM", "8µL H4 MM", "8µL H4 MM"],
        ["8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM","8µL H5 MM", "8µL H5 MM", "8µL H5 MM", "8µL H5 MM"],
        ["NTC", "NTC", "NTC", "NTC", "NTC", "NTC", "NTC","NTC", "NTC", "NTC", "NTC", "NTC"],
        ["EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY", "EMPTY"],
    ];

    gridItems.forEach((item, index) => {
        let isGreen = false;

        item.addEventListener('click', () => {
            if (!item.classList.contains('exclude-color-change')) {
                if (isGreen) {
                    item.style.backgroundColor = '#3498db';
                } else {
                    item.style.backgroundColor = '#0BDA51';
                }
                isGreen = !isGreen;
            }
        });

        item.addEventListener('mouseenter', () => {
            const col = index % 12; // Calculate column index
            const row = Math.floor(index / 12); // Calculate row index
            const text = itemText[row][col];
            const span = item.querySelector('span');
            span.style.visibility = 'hidden';
            span.insertAdjacentHTML('afterend', text);
        });

        item.addEventListener('mouseleave', () => {
            const span = item.querySelector('span');
            span.style.visibility = 'visible';
            item.removeChild(item.lastChild);
            
        });
    });
});






