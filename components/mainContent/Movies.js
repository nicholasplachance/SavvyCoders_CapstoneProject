import { grabEndpoints } from "../../moviesData/lib";

function generateArticlesHTML(movies) {
  // console.log("3 movie html");
  // console.log(movies)
  return movies
    .map(
      ({
        title,
        director,
        year,
        actors,
        rated,
        plot,
        poster,
        category
      }) => `<section class="movie-sections"><div class="card-container movies-container grid-container">
            <div class="flex-container--mobile---column card-labels">
                <h3 class="movie-title">${title}</h3>
                <h4 class="movie-release--year">${director} | ${year}</h4>
                <h4 class="movie-actors">${actors}</h4>
                <h4>${rated}</h4>
                <p class="movie-plot">${plot}</p>
            </div>
            <div class="flex-container--mobile---row card-images">
              <img class="movie-poster"  src="${poster}" alt="">
              <li><a href="./comics" data-navigo class="read-more">${category}</a></li>
            </div>
          </div>
          </section>
            `
    )
    .join(" ");
}


export default ({ movies }) =>
  `<div class="hero-image">
  <div><h3 class="sub-header">The Infinity Stones</h3></div>
  <div class="stone-div">
  <div class="grid-item">
    <div class="stone-name">Space stone</div>
    <div class="stone space-stone"></div>
  </div>

  <div class="grid-item">
  <div class="stone-name">Power stone</div>
  <div class="stone power-stone"></div>
  </div>

  <div class="grid-item">
  <div class="stone-name">Soul stone</div>
  <div class="stone soul-stone"></div>
  </div>

  <div class="grid-item">
  <div class="stone-name">Reality stone</div>
  <div class="stone reality-stone"></div>
  </div>

  <div class="grid-item">
  <div class="stone-name">Mind stone</div>
  <div class="stone mind-stone"></div>
  </div>

  <div class="grid-item">
  <div class="stone-name">Time stone</div>
  <div class="stone time-stone"></div>
  </div>

  </div>
  </div>
  <div class="section-grid">${generateArticlesHTML(movies)}</div>`
// export default () => `<div class="hero-image">
// </div>`
