const button = document.querySelector('.button');

button.addEventListener('click', function(event) {
    const body = document.querySelector('body');
    body.classList.toggle('red');
    body.classList.toggle('blue');
});