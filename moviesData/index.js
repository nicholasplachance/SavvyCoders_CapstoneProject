import { db } from "../firebase";
import axios from "axios";
import { grabEndpoints } from "./lib";

export const fetchData = grabEndpoints()

export default st => {
  const titles = document.querySelectorAll("h3");
  const learnMore = document.querySelectorAll("h5");
  const allMovies = document.querySelector(".section-grid");
  const input = document.querySelector("#search-bar");
  const searchSubmit = document.querySelector("#search-submit");
  const toTop = document.querySelector("#toTop");
  const autoComplete = document.querySelector(".auto-complete");
  const movieCategories = [];

  input.addEventListener("keyup", () => {
    movieCategories.length = 0;
    autoComplete.innerHTML = ``;

    console.log(autoComplete);

    if (allMovies.innerHTML.includes(input.value) && input.value !== "") {
      st.movies.forEach(movie => {
        movieCategories.push(movie.category);
      });

      movieCategories.forEach(category => {
        if (category.includes(input.value)) {
          autoComplete.innerHTML += `<h3 class="dropdown-option">${category.replace(
            /-/g,
            " "
          )}</h3>`;
        }
      });

      const dropdownOptions = document.querySelectorAll(".dropdown-option");
      console.log(dropdownOptions);

      if (dropdownOptions !== null) {
        dropdownOptions.forEach(option => {
          option.addEventListener(
            "click",
            () => (input.value = option.textContent)
          );
        });
      }

      // }

      autoComplete.style.display = "flex";
      // document.querySelector("#Batman").scrollIntoView()

      searchSubmit.addEventListener("click", () => {
        autoComplete.style.display = "none";
        let movie = document
        .getElementById(input.value.replace(/ /g, "-"))

        movie.scrollIntoView({ block: "center", behavior: "smooth" });
        movie.style.boxShadow  =  "white 0px 0px 10px 15px";
      });

      if (event.keyCode === 13) {
        autoComplete.style.display = "none";
        let movie = document
        .getElementById(input.value.replace(/ /g, "-"))

        movie.scrollIntoView({ block: "center", behavior: "smooth" });
        movie.style.boxShadow  =  "white 0px 0px 10px 15px";
      }
    }
  });

  toTop.addEventListener("click", () => {
    let movie = document
        .getElementById(input.value.replace(/ /g, "-"))
    document
      .querySelector("header")
      .scrollIntoView({ block: "start", behavior: "smooth" });
    if ( input.value !== "" ) {
      console.log(movie)
      movie.style.boxShadow  =  "none";
    }
    input.value = "";
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
