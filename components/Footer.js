export default function(credits = "2019 Nick LaChance") {
  return `<footer>
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./movies.html">Movies</a></li>
        <li><a href="./comics.html">Comics</a></li>
        <li><a href="./recommendations.html">Recommendations</a></li>
      </ul>
      <p>&copy; ${credits} | All rights reserved.</p>

    </footer>`;
}
