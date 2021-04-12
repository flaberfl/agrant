const burger = document.getElementById('burger');
const nav = document.getElementById('mobile-menu');
const body = document.body;

burger.addEventListener('click', event => {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
    // console.log('close');
  } else {
    showSidebar();
    // console.log('show');
  }
});

nav.addEventListener('click', event => {
  closeSidebar();
})

function showSidebar() {
  let mask = document.createElement('div');

  mask.classList.add('mask');
  mask.addEventListener('click', closeSidebar);
  body.appendChild(mask);
  
  body.classList.add('show-sidebar');
}

function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.mask').remove();
}