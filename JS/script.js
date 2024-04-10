const burgerMenuButton = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu_burger_contenu');

burgerMenuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});