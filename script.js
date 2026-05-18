const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const main = document.querySelector("main");

// adds click event listener
hamburger.addEventListener("click", function () {
  // toggles 'active' class on nav menu when clicked
  navList.classList.toggle("active");
  main.classList.toggle("active");
  }
);