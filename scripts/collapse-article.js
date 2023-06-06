const collapsedArticles = document.querySelectorAll('.blog-article.short');

collapsedArticles.forEach((collapsedArticle) => {
  const button = collapsedArticle.querySelector('.more');
  button.addEventListener('click', () => {
    collapsedArticle.classList.remove('short');
  })
});