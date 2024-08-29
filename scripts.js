// Select the See More button and hidden items
const seeMoreButton = document.querySelector('.see-more-button');
const hiddenItems = document.querySelectorAll('.hidden-item');

// Add an event listener to the See More button
seeMoreButton.addEventListener('click', () => {
    // Toggle the visibility of each hidden item
    hiddenItems.forEach(item => {
        item.classList.toggle('visible');
    });

    // Toggle the text of the See More button between "See More" and "See Less"
    if (seeMoreButton.textContent === 'See More') {
        seeMoreButton.textContent = 'See Less';
    } else {
        seeMoreButton.textContent = 'See More';
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Normally, here you would handle form submission (e.g., send data to server)
        // For demonstration purposes, we will just show the thank you message

        // Hide the form
        form.style.display = 'none';

        // Show the thank you message
        thankYouMessage.style.display = 'block';

        // Optionally, clear the input field
        emailInput.value = '';
    });
});
