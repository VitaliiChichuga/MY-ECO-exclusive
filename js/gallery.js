import { data } from './data.js';

const solutionsPageWork = document.querySelector('body');


solutionsPageWork.addEventListener('click', e => {
    data.forEach(element => {
        if (e.target.className.includes(element.name)) {
            let arr = generator(element.imgCollectionPath);

            Fancybox.show(arr, 'src');
        }
    });
});

function generator(arr) {
    let newArr = [];
    arr.forEach(el => {
        newArr.push({ src: el });
    });

    return newArr;
}
