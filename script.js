const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
let storedTheme = localStorage.getItem('theme');

function updateTheme(newTheme) {
  const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';

  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);

  const navbar = document.querySelectorAll('.navbar');
  const gridItems = document.querySelectorAll('.grid-item');

  navbar.forEach((item) => {
    item.classList.remove(`${currentTheme}-1`);
    item.classList.add(`${newTheme}-1`);
  });

  gridItems.forEach((item) => {
    item.classList.remove(`${currentTheme}-2`);
    item.classList.add(`${newTheme}-2`);
  });

  const githubIcon = document.getElementById('github_icon');
  const themeIcon = document.getElementById('theme_icon');

  githubIcon.src = newTheme === 'dark-theme' ? 'github_dark.png' : 'github_light.png';
  themeIcon.src = newTheme === 'dark-theme' ? 'theme_dark.png' : 'theme_light.png';
}

if (!storedTheme) {
  storedTheme = 'dark-theme';
  updateTheme(storedTheme);
} else {
  body.classList.add(storedTheme);
  updateTheme(storedTheme);
}

themeSwitch.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
  updateTheme(newTheme);
});

function adjustWidthPercentage() {
  const pageWidth = window.innerWidth;
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item) => {
    const inversePercentage = 150 - (pageWidth / 10);
    item.style.width = `${Math.min(Math.max(inversePercentage, 33.33), 85)}%`;
  });
}

window.addEventListener('resize', adjustWidthPercentage);
window.addEventListener('load', adjustWidthPercentage);