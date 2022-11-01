const mobileNav = document.querySelector('ul');
const burger = document.querySelector('.hamburger');

burger.addEventListener("click", function(){
    mobileNav.classList.toggle("active");
    burger.classList.toggle("active");
})