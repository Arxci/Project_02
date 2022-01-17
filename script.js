function NavbarOnScroll() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
}

function HandleHamburgerClick() {
    var sideBar = document.getElementById('sidebar');
    sideBar.classList.toggle('open');
}

window.addEventListener('scroll', NavbarOnScroll);


const hamburger = document.getElementsByClassName('hamburger');
for (item of hamburger) {
    item.addEventListener('click', HandleHamburgerClick);
}


const navButtons = document.getElementsByClassName('nav-button');
for (item of navButtons) {
    item.addEventListener('click', HandleHamburgerClick);
}