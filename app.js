const hamburgerIcon = document.querySelector("#hamburger-icon");
const navUl = document.querySelector("nav ul");

hamburgerIcon.addEventListener("click", ()=> {
  navUl.classList.toggle("is-hidden--mobile");
})

const superHeroMovieIds = [
  { moviePublisher: "marvel", movieName: "Iron Man", movieId: "tt0371746" },
  { moviePublisher: "marvel", movieName: "The Incredible Hulk", movieId: "tt0800080" },
  { moviePublisher: "marvel", movieName: "Iron Man 2", movieId: "tt1228705" },
  { moviePublisher: "marvel", movieName: "Thor", movieId: "tt0800369"},
  { moviePublisher: "marvel", movieName: "Captain America: The First Avenger", movieId: "tt0458339"},
  { moviePublisher: "marvel", movieName: "The Avengers", movieId: "tt0848228"},
  { moviePublisher: "marvel", movieName: "Iron Man 3", movieId: "tt1300854"},
  { moviePublisher: "marvel", movieName: "Thor: The Dark World", movieId: "tt1981115"},
  { moviePublisher: "marvel", movieName: "Captain America: The Winter Soldier", movieId: "tt1843866"},
  { moviePublisher: "marvel", movieName: "Guardians of the Galaxy", movieId: "tt2015381"},
  { moviePublisher: "marvel", movieName: "Avengers: Age of Ultron", movieId: "tt2395427"},
  { moviePublisher: "marvel", movieName: "Ant-Man", movieId: "tt0478970"},
  { moviePublisher: "marvel", movieName: "Captain America: Civil War", movieId: "tt3498820"},
  { moviePublisher: "marvel", movieName: "Doctor Strange", movieId: "tt1211837"},
  { moviePublisher: "marvel", movieName: "Guardians of the Galaxy Vol. 2", movieId: "tt3896198"},
  { moviePublisher: "marvel", movieName: "Spider-Man: Homecoming", movieId: "tt2250912"},
  { moviePublisher: "marvel", movieName: "Thor: Ragnarok", movieId: "tt3501632"},
  { moviePublisher: "marvel", movieName: "Black Panther", movieId: "tt1825683"},
  { moviePublisher: "marvel", movieName: "Avengers: Infinity War", movieId: "tt4154756"},
  { moviePublisher: "marvel", movieName: "Ant-Man and the Wasp", movieId: "tt5095030"},
  { moviePublisher: "marvel", movieName: "Captain Marvel", movieId: "tt4154664"},
  { moviePublisher: "marvel", movieName: "Avengers: Endgame", movieId: "tt4154796"},
  { moviePublisher: "marvel", movieName: "Spider-Man: Far from Home", movieId: "tt6320628"},
  { moviePublisher: "dc", movieName: "Man of Steel", movieId: "tt0770828"},
  { moviePublisher: "dc", movieName: "Batman v Superman: Dawn of Justice", movieId: "tt2975590"},
  { moviePublisher: "dc", movieName: "Suicide Squad", movieId: "tt1386697"},
  { moviePublisher: "dc", movieName: "Wonder Woman", movieId: "tt0451279"},
  { moviePublisher: "dc", movieName: "Justice League", movieId: "tt0974015"},
  { moviePublisher: "dc", movieName: "Aquaman", movieId: "tt1477834"},
  { moviePublisher: "dc", movieName: "Shazam!", movieId: "tt0448115"},
  { moviePublisher: "dc", movieName: "Joker", movieId: "tt7286456"}
];


const justiceLeague = superHeroMovieIds.filter(movie => movie.moviePublisher === "dc").map(movie => movie);

const avengers = superHeroMovieIds.filter(movie => movie.moviePublisher === "marvel").map(movie => movie);

const movieCard = document.querySelectorAll(".card-container");
const movieCardText = document.querySelectorAll(".card-labels");
const movieCardImages = document.querySelectorAll(".card-images");
const movieCardTitle = document.querySelectorAll(".movie-title");
const movieCardActors = document.querySelectorAll(".movie-actors");
const movieCardYear = document.querySelectorAll(".movie-release--year");
const marvelMovieCardContainer = document.querySelector(".marvel-movie--card---container");
const dcMovieCardContainer = document.querySelector(".dc-movie--card---container");
const randomMoviePoster = document.querySelectorAll(".random-movie--image");

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


// justiceLeague.map(element => {
//   movie = element.movieId;
//   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
//   fetch(url) // Call the fetch function passing the url of the API as a parameter
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data here
//     // console.log(data.Actors);
//     // console.log(data.Title);


//     dcMovieCardContainer.innerHTML += `<div class="flex-container--mobile---row card-container">
//     <div class="flex-container--mobile---column card-labels">
//         <h3 class="movie-title">${data.Title}</h3>
//         <h4 class="movie-release--year">${data.Director} | ${data.Year}</h4>
//         <h4 class="movie-actors">${data.Actors}</h4>
//         <h4>${data.Rated}</h4>
//         <p class="movie-plot">${data.Plot}</p>
//       <a href="#" class="read-more">Read more...</a>
//     </div>
//     <div class="flex-container--mobile---row card-images">
//       <img src="${data.Poster}" alt="">
//     </div>
//   </div>
//     `
//   });
// });

// avengers.map(element => {
//   movie = element.movieId;
//   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
//   fetch(url) // Call the fetch function passing the url of the API as a parameter
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data here
//     // console.log(data.Actors);
//     // console.log(data.Title);


//     marvelMovieCardContainer.innerHTML += `<div class="flex-container--mobile---row card-container">
//     <div class="flex-container--mobile---column card-labels">
//         <h3 class="movie-title">${data.Title}</h3>
//         <h4 class="movie-release--year">${data.Director} | ${data.Year}</h4>
//         <h4 class="movie-actors">${data.Actors}</h4>
//         <h4>${data.Rated}</h4>
//         <p class="movie-plot">${data.Plot}</p>
//       <a href="#" class="read-more">Read more...</a>
//     </div>
//     <div class="flex-container--mobile---row card-images">
//       <img src="${data.Poster}" alt="">
//     </div>
//   </div>
//     `
//   });
// });

// superHeroMovieIds.map( element => {
//   movie = element.movieId;
//   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
//   fetch(url) // Call the fetch function passing the url of the API as a parameter
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data here
//     // console.log(data);
//     // console.log(data.Actors);
//     // console.log(data.Title);

//     randomMoviePoster[0].innerHTML = `<img src="${data.Poster}" alt="${data.Title} poster">`;
// })})

// superHeroMovieIds.map( element => {
//   movie = element.movieId;
//   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
//   fetch(url) // Call the fetch function passing the url of the API as a parameter
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data here
//     // console.log(data);
//     // console.log(data.Actors);
//     // console.log(data.Title);

//     randomMoviePoster[1].innerHTML = `<img src="${data.Poster}" alt="${data.Title} poster">`;
// })})

// superHeroMovieIds.map( element => {
//   movie = element.movieId;
//   url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
//   fetch(url) // Call the fetch function passing the url of the API as a parameter
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     // Work with JSON data here
//     // console.log(data);
//     // console.log(data.Actors);
//     // console.log(data.Title);

//     randomMoviePoster[2].innerHTML = `<img src="${data.Poster}" alt="${data.Title} poster">`;
// })})
