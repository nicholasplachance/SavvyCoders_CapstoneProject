// export default function(credits = "2019 Nick LaChance") {
//   return `<footer>
//     <ul>
//         <li><a href="./index.html">Home</a></li>
//         <li><a href="./movies.html">Movies</a></li>
//         <li><a href="./comics.html">Comics</a></li>
//         <li><a href="./recommendations.html">Recommendations</a></li>
//       </ul>
//       <p>&copy; ${credits} | All rights reserved.</p>

//     </footer>`;
// }

import { Links } from "../store";

function linksBuilder(links) {
  // Loop over links and dynamically create the list of links
  // Using a template literal build out list item markup

  return links
    .map(link => `<li><a href="./${link}" data-navigo>${link}</a></li>`)
    .join("");
}

export default function(credits = "2019 Nick LaChance") {
  return `<footer>
  <ul>
  ${linksBuilder(Links)}
  </ul>
  <p>&copy; ${credits} | All rights reserved.</p>
  </footer>`;
}
