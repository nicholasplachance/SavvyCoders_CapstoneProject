export default () =>
  `<div class="hero-image">
  <p>We are a website that shows all current Superhero movies and recommends a comic to read to learn more about the characters, worlds, and story arcs.</p>
</div>
<div class="flex-container--desktop flex-direction--row">
<section>
  <h2 class="sub-header">Movies</h2>
  <div class="card-container">
    <div class="flex-container--mobile---column">
      <p>
        There are tons of comic book movies out, where to start? Where do you find out more information on these characters and their stories? Look no further, navigate through the website and find your favorite superhero movie!
      </p>
    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row random-movie--image">
      <img class="home-images" src="https://www.wjpitch.com/wp-content/uploads/2019/04/26944754457_8798a32d51_b-760x900.jpg" alt="Marvel Movie Collage" />
    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row">
    <a a href="./movies" data-navigo class="read-more">Read more...</a>
  </div>
  </div>
</section>
<section>
  <h2 class="sub-header">Comics</h2>
  <div class="card-container">
    <div class="flex-container--mobile---column">
      <p>
        Trying to figure out what comic to read next? Here is a great list of comic books to read for superhero movie fans! There are so many different comic book issues out, this list will help narrow down where to start.
      </p>

    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row random-movie--image">
      <img class="home-images" src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/439359/439359._SX360_QL80_TTD_.jpg" alt="DC Rebirth Comic Cover" />
    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row">
      <a href="./comics" data-navigo class="read-more">Read more...</a>
    </div>
  </div>
</section>
<section>
  <h2 class="sub-header">Recommendations</h2>
  <div class="card-container">
    <div class="flex-container--mobile---column">
      <p>
        This is a great place to find superhero movies and comic book recommendations from the developer! These are some of the movies and comics I would recommend to anyone. Discover something new!
      </p>
    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row random-movie--image">
      <img class="home-images" src="https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR85,0,630,1200_AL_.jpg" alt="A random stock image" />
    </div>
    <div class="flex-container--desktop---row flex-container--mobile---row">
      <a href="./recommendations" data-navigo class="read-more">Read more...</a>
    </div>
  </div>
</section>
</div>`;
