const iconMenu = document.querySelector("#icon-menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click" , function() {
    menu.classList.toggle("active");
    menu.classList.toggle("translate");
})