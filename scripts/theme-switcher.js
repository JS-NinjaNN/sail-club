const themeButtonDark = document.querySelector('.theme-button-dark');
const themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.addEventListener('click', () => {
  document.body.classList.add('dark');
  themeButtonLight.classList.remove('active');
  themeButtonDark.classList.add('active');
});

themeButtonLight.addEventListener('click', () => {
  document.body.classList.remove('dark');
  themeButtonLight.classList.add('active');
  themeButtonDark.classList.remove('active');
});