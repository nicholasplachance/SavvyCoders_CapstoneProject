import { auth, db } from "../firebase";
import axios from "axios";
import { grabEndpoints } from "./lib";

export default st => {
  let movieEndPoints = grabEndpoints();
  console.log(grabEndpoints());
};
