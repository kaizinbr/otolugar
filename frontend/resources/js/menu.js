const btbMobile = document.getElementById('btn-mobile');
const btnEx = document.querySelector('.bx-x');
const btnMenu = document.querySelector('.bx-menu');

function toggleMenu() {
    const nav = document.querySelector('.navmenu');

    nav.classList.toggle('active');
}

function botoes() {
    

    btnEx.classList.toggle('active');

    btnMenu.classList.toggle('active');

}

btbMobile.addEventListener('click', toggleMenu);
btnEx.addEventListener('click', botoes);
btnMenu.addEventListener('click', botoes);