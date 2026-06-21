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

// NAV LINK INTERACTIVITY //

// GALLERY START //
const galleryTrack = document.querySelector('.gallery-track');

// Only run on pages that have a gallery
if (galleryTrack) {
    fetch('gallery.json')
        .then(response => response.json()) // parse the file as JSON
        .then(artworks => {
            artworks.forEach(artwork => {
                // Build the card HTML for each artwork in the JSON
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
        });
}
// GALLERY END //
