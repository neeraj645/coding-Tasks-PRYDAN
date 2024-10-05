
const themeSwitcher = document.getElementById('themeSwitcher');


const currentTheme = localStorage.getItem('theme') || 'light';
document.body.className = currentTheme;
themeSwitcher.textContent = currentTheme === 'light' ? '🌙' : '☀️';


themeSwitcher.addEventListener('click', () => {

    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;

    localStorage.setItem('theme', newTheme);

    themeSwitcher.textContent = newTheme === 'light' ? '🌙' : '☀️';
});
