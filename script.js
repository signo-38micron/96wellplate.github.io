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
    // Add an event listener to the "Search" button
    document.getElementById("search-button").addEventListener("click", function() {
        // Get the search keyword from the input field and make it lowercase
        const searchKeyword = document.getElementById("search-input").value.toLowerCase();

        // Loop through grid items and change color based on the search keyword
        gridItems.forEach((item) => {
            const keyword = item.getAttribute("data-keyword").toLowerCase(); // Get the keyword from data-keyword attribute

            // Check if the keyword matches the search keyword (case-insensitive)
            if (keyword.includes(searchKeyword)) {
                item.style.backgroundColor = 'Grey'; // Change color to white for matching items
            } else {
                item.style.backgroundColor = '#3498db'; // Reset color for non-matching items
            }
        });
    });

    // Add an event listener to the "Clear" button
    document.getElementById("clear-button").addEventListener("click", function() {
        // Reset the colors of all grid items to the default color
        gridItems.forEach(item => {
            item.style.backgroundColor = '#3498db';
        });

        // Clear the search input field
        document.getElementById("search-input").value = '';
    });
    
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






