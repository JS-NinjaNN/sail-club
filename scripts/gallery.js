const activePhoto = document.querySelector('.active-photo');
const previews = document.querySelectorAll('.preview-list a');

previews.forEach((preview) => {
  preview.addEventListener('click', (e) => {
    e.preventDefault();

    const currentActive = document.querySelector('.preview-list .active-item');
    currentActive.classList.remove('active-item');
    preview.classList.add('active-item');

    activePhoto.src = preview.href;
  });
});