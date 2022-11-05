const mobileNav = document.querySelector('ul');
const burger = document.querySelector('.hamburger');

burger.addEventListener("click", function(){
    mobileNav.classList.toggle("active");
    burger.classList.toggle("active");
})

const navHome = document.querySelector('.element-home');
const navAbout = document.querySelector('.element-about');
const navWork = document.querySelector('.element-work');


navHome.addEventListener("click", function(){
    if(mobileNav.classList.contains("active")){
        mobileNav.classList.toggle("active");
        burger.classList.toggle("active");
    }
    else{
    }
})
navAbout.addEventListener("click", function(){
    if(mobileNav.classList.contains("active")){
        mobileNav.classList.toggle("active");
        burger.classList.toggle("active");
    }
    else{
    }
})
navWork.addEventListener("click", function(){
    if(mobileNav.classList.contains("active")){
        mobileNav.classList.toggle("active");
        burger.classList.toggle("active");
    }
    else{
    }
})