const navslide = () => {
    const menu = document.querySelector('.menu');
    const header = document.querySelector('.else');
    const menu_btn = document.querySelector('.hambergur');

    menu.addEventListener('click', () => {
        header.classList.toggle('else-active');

        menu_btn.classList.toggle('is-active');
    });


}

const dropdownLanguages = () => {
    const drop = document.querySelector('.dropdown');

    menu.addEventListener('click', () => {
        drop.classList.add('languages');

    });


}
navslide();
