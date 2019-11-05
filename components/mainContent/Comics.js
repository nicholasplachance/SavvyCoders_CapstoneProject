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
        url
      }) => `<section class="movie-sections"><div class="card-container movies-container grid-container">
            <div class="flex-container--mobile---column card-labels">
                <h3 class="movie-title">${title}</h3>
                <h4 class="movie-release--year">${author} | ${year}</h4>
                <h4 class="movie-actors">${illustrator}</h4>
                <h4>${category}</h4>
                <h4 >Buy the comic here!</h4>
                <a href="url" >${url}</h4>
            </div>
            <div class="flex-container--mobile---row card-images">
              <img class="movie-poster"  src="${cover}" alt="">
              <li><a href="./comics" data-navigo class="read-more">${category}</a></li>
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
