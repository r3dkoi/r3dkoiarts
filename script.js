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
