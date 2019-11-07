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
  const input = document.querySelector("input");

  input.addEventListener("keyup", () => {
    if ( allMovies.innerHTML.includes(input.value)) {
      // document.querySelector("#Batman").scrollIntoView()
      console.log(document.querySelector(`#${input.value}`))
      document.querySelector(`#${input.value}`).scrollIntoView()

    }

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
