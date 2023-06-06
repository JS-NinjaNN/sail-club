const cardViewButtonGrid = document.querySelector('.card-view-button-grid');
const cardViewButtonList = document.querySelector('.card-view-button-list');
const cards = document.querySelector('.cards');

cardViewButtonGrid.addEventListener('click', (e) => {
  e.preventDefault();
  cardViewButtonGrid.classList.add('active');
  cardViewButtonList.classList.remove('active');
  cards.classList.remove('list');
});

cardViewButtonList.addEventListener('click', (e) => {
  e.preventDefault();
  cardViewButtonGrid.classList.remove('active');
  cardViewButtonList.classList.add('active');
  cards.classList.add('list');
});