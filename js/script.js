// GLobal Variable
const btnMenu = document.querySelector(".btn-menu");
const open = document.querySelector(".ri-menu-fill");
const close = document.querySelector("#close");
const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelectorAll(".nav-list");

// function scroll mengubah bg navbar
const navScroll = () => {
   const header = document.querySelector("#header");
   window.addEventListener("scroll", () => {
      header.classList.toggle("sticky", scrollY > 0);
   });
};
navScroll();

// function Nav Menu
const menu = () => {
   open.addEventListener("click", () => {
      navMenu.classList.add("show");
      open.style.display = "none";
      close.style.display = "block";
      close.addEventListener("click", () => {
         navMenu.classList.remove("show");
         open.style.display = "block";
         close.style.display = "none";
      });
   });
};
menu();

// function close nav list
const navlist = () => {
   navList.forEach((n) =>
      n.addEventListener("click", () => {
         navMenu.classList.remove("show");
         open.style.display = "block";
         close.style.display = "none";
      })
   );
};
navlist();
