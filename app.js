const hamburgerIcon = document.querySelector("#hamburger-icon");
const navUl = document.querySelector("nav ul");

hamburgerIcon.addEventListener("click", ()=> {
  navUl.classList.toggle("is-hidden--mobile");
})
