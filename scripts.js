// Seleciona os botões
const darkModeToggle = document.getElementById('darkModeToggle');
const increaseFontToggle = document.getElementById('increaseFontToggle');

// Alterna o modo escuro
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Alterna o aumento de fonte
increaseFontToggle.addEventListener('click', () => {
    document.body.classList.toggle('large-font');
});