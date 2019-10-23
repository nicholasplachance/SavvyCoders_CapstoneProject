// index.js file inside ROOT DIRECTORY


// Object destructing, it replaces dot-notation, and pulls specifically
import { Header, Navigation, Main, Footer } from "./components";

// Pulls everything from "./store", pulls generally
import * as state from "./store";

// Import node module: navigo
import Navigo from "navigo";
import axios from "axios"
import { capitalize } from "lodash"


// Import firebase db
import { auth, db } from "./firebase"

console.log(auth);

console.log(db)

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // TODO: Using response.data[0]
    state.Blog.main += response.data.map(({title, body})=>
      `<article>
      <h2 class="sub-header">${title}</h2>
      <p>${body}</p>
      </article>`
  ).join("")

  if ( router.lastRouteResolved().params && capitalize(router.lastRouteResolved().params.page) === "Blog") {
    renderState(state.Blog)
  }

  });


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
  (document.querySelector("#root").innerHTML = `
  ${Header(st)}
  ${Navigation()}
  ${Main(st)}
  ${Footer()}
`);
  router.updatePageLinks();
  const navUl = document.querySelector("nav ul");
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  hamburgerIcon.addEventListener("click", ()=> {
    navUl.classList.toggle("is-hidden--mobile");
  })

}

router
  // Developer's Note: ':page' can be whatever you want to name the key that comes into `params` Object Literal
  .on(":page", params =>
    renderState(state[capitalize(params.page)])
  )
  .on("/", () => renderState())
  // TODO - Create a 404 page and route all bad routes to that page
  .resolve();
// console.log(window.location.pathname)
// console.log(location.pathname.slice(1));



// Gallery
db.collection("pictures")
  .get()
  .then(querySnapshots => {

    // Let's make sure to update instead of overwriting our markup
    state.Gallery.main +=
      `<div class="gallery">` +
      querySnapshots.docs
        .map(doc => {
          // Combine `const` with destructuring to create 3 variables from the keys in our object literal
          const { caption, credit, imgURL } = doc.data();

          return `
        <figure>
          <img src="${imgURL}" alt="">
          <figcaption>${caption} - ${credit}</figcaption>
        </figure>
      `;
        })
        .join(" ") +
      `</div>`;

    if (
      router.lastRouteResolved().params &&
      capitalize(router.lastRouteResolved().params.page) === "Gallery"
    ) {
      renderState(state.Gallery);

      const imgURL = document.querySelector("#imgURL");
      const caption = document.querySelector("#caption");
      const credit = document.querySelector("#credit");

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        db.collection("pictures")
          .add({
            imgURL: imgURL.value,
            caption: caption.value,
            credit: credit.value
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      });
    }
  })
  .catch(err => console.error("Error loading pics", err));



// Admin

// TODO: Rather than grabbing each element manually, consider using (`event.target.elements`) on the `submit` event.
// Are we on Admin page?
if (
  router.lastRouteResolved().params &&
  capitalize(router.lastRouteResolved().params.page) === "Admin"
) {
  // Are we logged in?
  auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
      // We are logged in!
      console.log("you are logged in!");
      state.Admin.main = `<div class="hero-image">
      </div><button type="button">Log out!</button>`;

      renderState(state.Admin);

      document.querySelector("button").addEventListener("click", () => {
        auth
          .signOut()
          .then(() => {
            state.Admin.main = `
            <div class="hero-image">
          </div>
          <div class="flex-container--desktop flex-direction--row"></div>
              <form>
                <div class="inputarea">
                <label for="name">User Name:</label>
                  <input type="email" />
                </div>
                <div class="inputarea">
                <label for="email">Password:</label>
                  <input type="password" />
                </div>
                <input id="login" type="submit" value="Log in!" />
              </form>
            `;

          renderState(state.Admin);
          })
          .catch(err => console.log("Error signing out", err.message));
      });
    } else {
      const email = document.querySelector('[type="email"]');
      const password = document.querySelector('[type="password"]');

      document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();

        auth
          .signInWithEmailAndPassword(email.value, password.value)
          .catch(err => console.error("Got an error", err.message));
      });
    }
  });
}




// Test pulling information from firebase database


// db.collection("superheroMovies")
//   .get()
//   .then(querySnapshots => {
//     querySnapshots.docs
//       .map(doc => {
//         const { moviePublisher, movieTitle, imdbID } = doc.data();

//         console.log(moviePublisher, movieTitle, imdbID)
//       })
//   })
