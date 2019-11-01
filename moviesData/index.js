import { db } from "../firebase";
import axios from "axios";
import { grabEndpoints } from "./lib";

export default st => {

  let movieEndPoints = grabEndpoints();
  st.movies = movieEndPoints;
  console.log(st.movies)
  console.log("2 movie index");
  // console.log("hello", st.movies)
  // console.log(movieEndPoints);
  // console.log(movieEndPoints.length)
};


