const refs = {
  link: document.getElementById('first'),
  link2: document.getElementById('second'),
  link3: document.getElementById('third'),
  link4: document.getElementById('fourth'),
  link5: document.getElementById('fifth'),
};

refs.link.addEventListener('click', event => {
  event.preventDefault();

  $('.your-class').slick();
});
