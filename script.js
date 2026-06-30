// DARK MODE START //
const toggle = document.querySelector('.dark-mode-toggle');

// On page load, check if dark mode was previously saved
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark');
}

toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');

    // Save preference to localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// DARK MODE END //

// FORM VALIDATION //
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // stops the page from refreshing on submit

        // Grab the value from each field
        const name = document.getElementById('fullname').value;
        const email = document.getElementById('email_contact').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Check if any field is empty
        // Show success message and clear the form
        const formMessage = document.getElementById('form-message');
        formMessage.textContent = "Message sent successfully, will be back to you soon.";
        form.reset(); // clears all fields after successful submission
    });
}
// FORM VALIDATION END //


// GALLERY START //
const galleryTrack = document.querySelector('.gallery-track');

// Only run on pages that have a gallery
if (galleryTrack) {
    // galleryData is defined in gallery-data.js, loaded before this script in gallery.html
    galleryData.forEach(artwork => {
        // Build the card HTML for each artwork entry in gallery-data.js
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="inner-card">
                <div class="workpiece_display">
                    <img src="${artwork.image}" alt="${artwork.alt}">
                </div>
                <div class="card-back">
                    <h3>${artwork.title}</h3>
                    <p>${artwork.description}</p>
                </div>
            </div>
        `;
        galleryTrack.appendChild(card); // add the card to the page
    });
}
// GALLERY END //
