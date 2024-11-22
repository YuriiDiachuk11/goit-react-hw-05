import axios from "axios";

const TOKEN_API =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjE5NTVmMDA4MDg3NTBhZGM0ZDU2ZGY1MjIwYjZmMiIsIm5iZiI6MTczMjIyNDI1MS4yODUzNzU4LCJzdWIiOiI2NzNmYTBiMzRkZmEwNmI1ZGY5MmQ4N2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.b6CNOG_GWCeNSwZFCOTxdes9wlY_2KC4sLyQWTbi7so";
const BASE_URL = "https://api.themoviedb.org/3";

const accessAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN_API}`,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await accessAPI.get("/trending/movie/day");
  return data.results;
};
export const fetchMovieById = async (id) => {
  const { data } = await accessAPI.get(`/movie/${id}`);
  return data;
};

export const fetchMovieCastById = async (id) => {
  const { data } = await accessAPI.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchMovieReviewsById = async (id) => {
  const { data } = await accessAPI.get(`/movie/${id}/reviews`);
  return data.results;
};
