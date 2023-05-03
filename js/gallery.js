// console.log('aaa');

// import { gallerySecond, galleryFifth } from './app.js';

// const solutionsPageWork = document.querySelector('.shop-coll');

// solutionsPageWork.addEventListener('click', e => {
//   e.preventDefault;
//   console.log(e.target);
//   if (e.target.classList.contains('one')) {
//     Fancybox.show(galleryFifth, 'src');
//   }
//   if (e.target.classList.contains('two')) {
//     Fancybox.show(gallerySecond, 'src');
//   }
// });
// console.log('sss');

import {
  galleryCat,
  galleryDuck,
  galleryThird,
  galleryFourth,
  galleryFifth,
} from './app.js';

const solutionsPageWork = document.querySelector('body');
solutionsPageWork.addEventListener('click', e => {
  if (e.target.classList.contains('cat1')) {
    Fancybox.show(galleryCat, 'src');
  }
  if (e.target.classList.contains('duck')) {
    Fancybox.show(galleryDuck, 'src');
  }
});
