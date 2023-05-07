import { bagira, crack } from './app.js';

const solutionsPageWork = document.querySelector('body');

const getDataName = document.querySelectorAll('[data-name]');
// const nameArray = [];

solutionsPageWork.addEventListener('click', e => {
  if (e.target.dataset.name === 'bagira') {
    Fancybox.show(bagira, 'src');
  }
  if (e.target.dataset.name === 'crack') {
    Fancybox.show(crack, 'src');
  }
});
