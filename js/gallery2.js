import { bagira, crack } from './app.js';

let collectionArray = { bagira, crack };
const solutionsPageWork = document.querySelector('body');
// const getDataName = document.querySelectorAll('[data-name]');
solutionsPageWork.addEventListener('click', e => {
  let name = '';
  name = e.target.dataset.name;

  for (let key in collectionArray) {
    const keyOfCollection = `${key}`;
    console.log(name === keyOfCollection);
    if (name === keyOfCollection) {
      // Fancybox.show(bagira, 'src');
      console.log(typeof keyOfCollection);
      Fancybox.show(keyOfCollection, 'src');
    }
  }

  // if (e.target.dataset.name === 'bagira') {
  //   Fancybox.show(bagira, 'src');
  // }
  // if (e.target.dataset.name === 'crack') {
  //   Fancybox.show(crack, 'src');
  // }
});
