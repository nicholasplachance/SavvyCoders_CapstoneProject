import { auth, db } from "../firebase";
import axios from "axios";

export function grabEndpoints() {
  let firebaseData = [];
  let movieArray = [];
  const apiKey = `31152d26`;
  const query = db.ref("data/0/movies").orderByKey();
  query.once("value").then(function(snapshot) {
    // console.log(snapshot);
    snapshot.forEach(function(childSnapshot) {
      const childData = childSnapshot.val();
      // console.log(childData);
      let movie = childData.movieId;
      let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie}`;
      firebaseData.push(url);
      axios
        .get(url)
        .then(response => {
          return response.data;
        })
        .then(data => {
          movieArray.push({
            title: data.Title,
            director: data.Director,
            year: data.Year,
            actors: data.Actors,
            rated: data.Rated,
            plot: data.Plot,
            poster: data.Poster
          });
          // if (st.movies.length !== movieArray.length) {
          //   st.movies = movieArray.map(({ title, director, year, actors, rated, plot, poster }) => ({
          //     title: title,
          //     director: director,
          //     year: year,
          //     actors: actors,
          //     rated: rated,
          //     plot: plot,
          //     poster: poster
          //   }));
          // }
        });
    });
  });
  return movieArray;
}
