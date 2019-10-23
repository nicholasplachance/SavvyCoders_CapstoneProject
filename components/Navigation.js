import { Links } from "../store";

function linksBuilder(links) {
  // Loop over links and dynamically create the list of links
  // Using a template literal build out list item markup

  return links
    .map(link => `<li><a href="./${link}" data-navigo>${link}</a></li>`)
    .join("");
}

export default function() {
  return `<nav>
  <span id="hamburger-icon" class="fas fa-hamburger is-hidden--desktop"></span>
  <ul class="is-hidden--mobile show-on--desktop">
  ${linksBuilder(Links)}
  </ul>
  </nav>`;
}

{
  /* <li><a href="./index.html">Home</a></li>
  <li><a href="./about/">About</a></li>
  <li><a href="./contact/">Contact</a></li>
  <li><a href="./blog/">Blog</a></li>
  <li><a href="./gallery/">Gallery</a></li> */
}
