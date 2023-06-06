const fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
const fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.addEventListener('click', () => {
  document.body.classList.remove('serif');
  fontButtonSansSerif.classList.add('active');
  fontButtonSerif.classList.remove('active');
});

fontButtonSerif.addEventListener('click', () => {
  document.body.classList.add('serif');
  fontButtonSansSerif.classList.remove('active');
  fontButtonSerif.classList.add('active');
});
