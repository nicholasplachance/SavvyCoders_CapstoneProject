function generateArticlesHTML(comics) {
  // console.log("3 movie html");
  // console.log(movies)
  return comics
    .map(
      ({
        title,
        category,
        year,
        author,
        illustrator,
        cover,
        url,
        plot
      }) => `<section class="movie-sections"><div class="card-container movies-container grid-container">
            <div class="flex-container--mobile---column card-labels">
                <h3 class="movie-title">${title}</h3>
                <h4 class="movie-release--year">${author} | ${year}</h4>
                <h4 class="movie-actors">${illustrator}</h4>
                <h4>${category}</h4>
                <p class="movie-plot">${plot}</p>

            </div>
            <div class="flex-container--mobile---row card-images">
              <img class="movie-poster"  src="${cover}" alt="">
                <a href="${url}"  target="_blank" class="read-more"  >Buy comic!</a>
            </div>
          </div>
          </section>
            `
    )
    .join(" ");
}

export default ({comics}) => `<div class="hero-image">
<p>Comics page coming soon...</p>
</div>
<div class="section-grid">${generateArticlesHTML(comics)}</div>`
