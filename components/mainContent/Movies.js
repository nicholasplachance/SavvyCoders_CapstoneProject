import { grabEndpoints } from "../../moviesData/lib";

function generateArticlesHTML(movies) {
  console.log("3 movie html");
  grabEndpoints();

  return movies
    .map(
      ({
        title,
        director,
        year,
        actors,
        rated,
        plot,
        poster
      }) => `<div class="flex-container--mobile---row card-container">
            <div class="flex-container--mobile---column card-labels">
                <h3 class="movie-title">${title}</h3>
                <h4 class="movie-release--year">${director} | ${year}</h4>
                <h4 class="movie-actors">${actors}</h4>
                <h4>${rated}</h4>
                <p class="movie-plot">${plot}</p>
              <a href="#" class="read-more">Read more...</a>
            </div>
            <div class="flex-container--mobile---row card-images">
              <img src="${poster}" alt="">
            </div>
          </div>
            `
    )
    .join(" ");
}

export default ({ movies }) => `
    ${generateArticlesHTML(movies)}`;

// export default () => `<div class="hero-image">
// </div>`
