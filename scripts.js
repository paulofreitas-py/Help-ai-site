// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (darkModeToggle) darkModeToggle.addEventListener('click', toggleDarkMode);
if (darkModeToggleDesktop) darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
if (darkModeToggleMobile) darkModeToggleMobile.addEventListener('click', toggleDarkMode);

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Adicione o restante dos scripts aqui