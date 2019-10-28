import { auth, db } from "../firebase";
import axios from "axios";

export default st => {
  let movieArray = [];
  const apiKey = `31152d26`;
  const query = db.ref("data/0/movies").orderByKey();
  query.once("value").then(function(snapshot) {
    // console.log(snapshot);
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      const key = childSnapshot.key;
      // console.log(key);
      // childData will be the actual contents of the child
      const childData = childSnapshot.val();
      // console.log(childData.moviePublisher)
      // console.log(childData);
      let movie = childData.movieId;
      if (childData.moviePublisher === "dc") {
        // console.log(childData)
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
          // movieArray.push(data)
          // movies.push({movieName: data.Title,
          //               movieImage: data.Poster,
          //               movieActors: data.Actors,
          //               movieDirector: data.Director,
          //               movieYear: data.Year})
          movieArray.push(`<div class="flex-container--mobile---row card-container">
          <div class="flex-container--mobile---column card-labels">
              <h3 class="movie-title">${data.Title}</h3>
              <h4 class="movie-release--year">${data.Director} | ${data.Year}</h4>
              <h4 class="movie-actors">${data.Actors}</h4>
              <h4>${data.Rated}</h4>
              <p class="movie-plot">${data.Plot}</p>
            <a href="#" class="read-more">Read more...</a>
          </div>
          <div class="flex-container--mobile---row card-images">
            <img src="${data.Poster}" alt="">
          </div>
        </div>
          `)
        });
    });
  });
  return movieArray
};
