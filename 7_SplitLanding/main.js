var splitRight = document.querySelector('.split.right');
var splitLeft = document.querySelector('.split.left');
var container = document.querySelector('.container');
splitRight.addEventListener('mouseenter', () => container.classList.add('hover-right'))
splitRight.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
splitLeft.addEventListener('mouseenter', () => container.classList.add('hover-left'))
splitLeft.addEventListener('mouseleave', () => container.classList.remove('hover-left'))