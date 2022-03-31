const btbMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.querySelector('.navmenu');

    nav.classList.toggle('active');
}

btbMobile.addEventListener('click', toggleMenu);