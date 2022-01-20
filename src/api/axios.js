import axios from "axios";

/* base url to make requests to the movie database */
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

// instance.get("/foo-bar");

export default instance;
