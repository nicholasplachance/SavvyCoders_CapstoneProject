// index.js file inside ROOT DIRECTORY

// Object destructing, it replaces dot-notation, and pulls specifically
import { Header, Navigation, Main, Footer } from "./components";

// Pulls everything from "./store", pulls generally
import * as state from "./store";

// Import node module: navigo
import Navigo from "navigo";

import movies from "/moviesData";
import { capitalize } from "lodash";
// import * as lib from "./movies"
// console.log(typeof movies())
// Import firebase db
import { auth, db } from "./firebase";
import { get } from "http";

// TODO create a firebase db fetch to retrieve imdb ids for api fetch request
// TODO create a api fetch request to pull data for movies

function getProxy(st) {
  return new Proxy(st, {
    set(st, k, v) {
      st[k] = v;
      renderState(st);
      return true;
    }
  });
}

const router = new Navigo(location.origin);

function renderState(st = state.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main(st)}
  ${Footer()}
`;
  router.updatePageLinks();
  if (capitalize(router.lastRouteResolved().url.slice(1)) === "Movies") {
    console.log("1 router");
    console.log(movies(st))
    movies(st);
  }
}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params => renderState(state[capitalize(params.page)]))
  .on("/", () => renderState())
  // TODO - Create a 404 page and route all bad routes to that page
  .resolve();

// const apiKey = `31152d26`;
// const query = db.ref("data/0/movies").orderByKey();
// query.once("value").then(function(snapshot) {
//   console.log(snapshot);
//   snapshot.forEach(function(childSnapshot) {
//     // key will be "ada" the first time and "alan" the second time
//     const key = childSnapshot.key;
//     // console.log(key);
//     // childData will be the actual contents of the child
//     const childData = childSnapshot.val();
//     // console.log(childData.moviePublisher)
//     // console.log(childData);
//     let movie = childData.movieId
//     if ( childData.moviePublisher === "dc") {
//       // console.log(childData)
//     }
//
//     // state.Movies.main = dcMovieCardContainer.innerHTML;
//         if (
//           router.lastRouteResolved().params &&
//           capitalize(router.lastRouteResolved().params.page) === "Movies"
//         ) {
//           renderState(state.Movies);
//         }
//       });
//   });
// });
