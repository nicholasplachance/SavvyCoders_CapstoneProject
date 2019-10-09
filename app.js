const hamburger = document.querySelector("#hamburger-icon");
const navUl = document.querySelector("nav ul")

hamburger.addEventListener("click", function() {
  navUl.classList.toggle("is-hidden--mobile");
})
