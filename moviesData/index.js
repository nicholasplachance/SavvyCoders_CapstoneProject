import { db } from "../firebase";
import axios from "axios";
import { grabEndpoints } from "./lib";

export default st => {
  let movieEndPoints = grabEndpoints();
  st.movies = movieEndPoints;
  const titles = document.querySelectorAll("h3");
  const learnMore = document.querySelectorAll("h5");
  const div = document.querySelector(".movies-container");
  const allMovies = document.querySelector(".section-grid");
  const input = document.querySelector("#search-bar");
  const searchSubmit = document.querySelector("#search-submit");
  const toTop = document.querySelector("#toTop");
  const autoComplete = document.querySelector(".auto-complete");
  const movieCategories = [];
  console.log(st.movies)

  if (movieEndPoints.length >= 2) {
    console.log(st.movies);
  }

  input.addEventListener("keyup", () => {
    movieCategories.length = 0;
    autoComplete.innerHTML = ``;

    if (allMovies.innerHTML.includes(input.value) && input.value !== "") {
      st.movies.forEach(movie => {
        movieCategories.push(movie.category);
      });

      movieCategories.forEach(category => {
        if (category.includes(input.value)) {
          autoComplete.innerHTML += `<h3 class="dropdown-option">${category}</h3>`;
        }
      });

      const dropdownOption = document.querySelector(".dropdown-option");
      console.log(dropdownOption);

      if (dropdownOption !== null) {
        dropdownOption.addEventListener(
          "click",
          () => (input.value = dropdownOption.textContent)
        );
      }

      autoComplete.style.display = "flex";
      // document.querySelector("#Batman").scrollIntoView()

      searchSubmit.addEventListener("click", () => {
        autoComplete.style.display = "none";
        document
          .querySelector(`#${input.value}`)
          .scrollIntoView({ block: "center", behavior: "smooth" });
          input.value = ""
      });

      if (event.keyCode === 13) {
        autoComplete.style.display = "none";
        document
          .querySelector(`#${input.value}`)
          .scrollIntoView({ block: "center", behavior: "smooth" });
          input.value = ""
      }
    }
  });

  toTop.addEventListener("click", () => {
    document
      .querySelector("header")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });

  titles.forEach(link => {
    if (link.textContent === "Iron Man") {
      console.log(link);
    } else if (link.textContent === "Thor") {
      console.log(link);
    }
  });
  learnMore.forEach(link => {
    link.addEventListener("click", () => {
      console.log(link.textContent);
    });
  });
  console.log(learnMore);
  // learnMore.addEventListener("click", () => console.log(titles));
  // console.log(st.movies)
  // console.log("2 movie index");
  // console.log("hello", st.movies)
  // console.log(movieEndPoints);
  // console.log(movieEndPoints.length)
};
