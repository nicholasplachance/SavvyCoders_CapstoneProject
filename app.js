const hamburgerIcon = document.querySelector("#hamburger-icon");
const navUl = document.querySelector("nav ul");

hamburgerIcon.addEventListener("click", ()=> {
  navUl.classList.toggle("is-hidden--mobile");
})

const superHeroMovieIds = [
  { movieName: "Iron Man", movieId: "tt0371746" },
  { movieName: "The Incredible Hulk", movieId: "tt0800080" },
  { movieName: "Iron Man 2", movieId: "tt1228705" },
  { movieName: "Thor", movieId: "tt0800369"},
  { movieName: "Captain America: The First Avenger", movieId: "tt0458339"},
  { movieName: "The Avengers", movieId: "tt0848228"},
  { movieName: "Iron Man 3", movieId: "tt1300854"},
  { movieName: "Thor: The Dark World", movieId: "tt1981115"},
  { movieName: "Captain America: The Winter Soldier", movieId: "tt1843866"},
  { movieName: "Guardians of the Galaxy", movieId: "tt2015381"},
  { movieName: "Avengers: Age of Ultron", movieId: "tt2395427"},
  { movieName: "Ant-Man", movieId: "tt0478970"}
];

const movieCard = document.querySelectorAll(".card-container");
const movieCardText = document.querySelectorAll(".card-labels");
const movieCardImages = document.querySelectorAll(".card-images");
const movieCardTitle = document.querySelectorAll(".movie-title");
const movieCardActors = document.querySelectorAll(".movie-actors");
const movieCardYear = document.querySelectorAll(".movie-release--year");
const movieCardContainer = document.querySelector(".movie-card--container");

// const apiKey = `31152d26`;
// let url;

// url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${superHeroMovieIds[0].movieId}`;

// fetch(url) // Call the fetch function passing the url of the API as a parameter
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   // Work with JSON data here
//   console.log(data)
//   console.log(movieCardText[0].innerHTML);
//   movieCardTitle[0].textContent += data.Title;
//   movieCardActors[0].textContent += data.Actors
//   movieCardYear[0].textContent += `${data.Director} : ${data.Year}`;
//   movieCardImages[0].innerHTML += `<img src="${data.Poster}" alt="">`;
//   movieCard.innerHTML += `<h5>Actors: ${data.Actors}</h5>`;
//   movieCard.innerHTML += `<h4>Director: ${data.Director} ${data.Year}</h4>`;
// });


let movie;
const apiKey = `31152d26`;
let url;

superHeroMovieIds.forEach(element => {
  console.log(element.movieId);
  movie = element.movieId;
  url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
  fetch(url) // Call the fetch function passing the url of the API as a parameter
  .then(response => {
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    // console.log(data);
    // console.log(data.Actors);
    // console.log(data.Title);

    movieCardContainer.innerHTML += `<div class="flex-container--mobile---row card-container">
    <div class="flex-container--mobile---column card-labels">
        <h3 class="movie-title">${data.Title}</h3>
        <h4 class="movie-release--year">${data.Director} ${data.Year}</h4>
        <h4 class="movie-actors">${data.Actors}</h4>
      <a href="#" class="read-more">Read more...</a>
    </div>
    <div class="flex-container--mobile---row card-images">
      <img src="${data.Poster}" alt="">
    </div>
  </div>
    `

    console.log(movieCardContainer);
  });
});
