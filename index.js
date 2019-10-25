// index.js file inside ROOT DIRECTORY

// Object destructing, it replaces dot-notation, and pulls specifically
import { Header, Navigation, Main, Footer } from "./components";

// Pulls everything from "./store", pulls generally
import * as state from "./store";

// Import node module: navigo
import Navigo from "navigo";
import axios from "axios";
import { capitalize } from "lodash";

// Import firebase db
import { auth, db } from "./firebase";
import { database } from "firebase";
import { chown } from "fs";

// console.log(auth);

// console.log(db)

// TODO create a firebase db fetch to retrieve imdb ids for api fetch request
// TODO create a api fetch request to pull data for movies

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(response => {
//     // TODO: Using response.data[0]
//     state.Blog.main += response.data.map(({title, body})=>
//       `<article>
//       <h2 class="sub-header">${title}</h2>
//       <p>${body}</p>
//       </article>`
//   ).join("")

//   if ( router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page) === "Blog") {
//     renderState(state.Blog)
//   }

//   });

// The uppercase "N" for "Navigo" represents that it is a constructor function

const router = new Navigo(location.origin);
// console.log(Navigo);
// console.log(router);

// console.log(state);

// Use state to render the appropriate heading, depending on the 'state' of the app
// What page is currently selected or being currently displayed

// import Header from "./components/Header.js";
// import Nav from "./components/Navigation.js";
// import Main from "./components/Main.js";
// import Footer from "./components/Footer.js";

function renderState(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params => renderState(state[capitalize(params.page)]))
  .on("/", () => renderState())
  // TODO - Create a 404 page and route all bad routes to that page
  .resolve();
// console.log(window.location.pathname)
// console.log(location.pathname.slice(1));

// const query = db.ref("data/0/movies");

// const movies = query.once("value")
//   .then(snap => {
//   let data = snap.child("0/movieId").val()
//   console.log(data)
//   return data
// });

const apiKey = `31152d26`;

const query = db.ref("data/0/movies").orderByKey();
query.once("value").then(function(snapshot) {
  console.log(snapshot);
  snapshot.forEach(function(childSnapshot) {
    // key will be "ada" the first time and "alan" the second time
    const key = childSnapshot.key;
    // console.log(key);
    // childData will be the actual contents of the child
    const childData = childSnapshot.val();
    console.log(childData.moviePublisher)
    // console.log(childData);
    let movie = childData.movieId
    if ( childData.moviePublisher === "dc") {
      console.log(childData)
    }
    let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
    axios
      .get(url)
      .then(response => {
        // TODO: Using response.data[0]
        // console.log(response.data)
        return response.data;
      })
      .then(data => {
        state.Movies.main += `<section><div class="dc-movie--card---container">
              <h2 class="sub-header">${capitalize(childData.moviePublisher)} Movie</h2>
        <div class="flex-container--mobile---row card-container">
    <div class="flex-container--mobile---column card-labels">
        <h3 class="movie-title">${data.Title}</h3>
        <h4 class="movie-release--year">${data.Director} | ${data.Year}</h4>
        <h4 class="movie-actors">${data.Actors}</h4>
        <h4>${data.Rated}</h4>
        <p class="movie-plot">${data.Plot}</p>
      <a href="#" class="read-more">Read more...</a>
    </div>
    <div class="flex-container--mobile---row card-images">
      <img class="movie-poster" src="${data.Poster}" alt="">
    </div>
  </div>
  </div>
  </section>
    `
    // state.Movies.main = dcMovieCardContainer.innerHTML;
        if (
          router.lastRouteResolved().params &&
          capitalize(router.lastRouteResolved().params.page) === "Movies"
        ) {
          renderState(state.Movies);
        }
      });
  });
});
