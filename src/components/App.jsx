import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import NotFound from "../pages/NotFoundPage/NotFound";
import Movies from "../pages/MoviesPage/Movies";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import Navigation from "./Navigation/Navigation";
// import MovieList from "../components/MovieList/MovieList";
import MovieDetails from "../pages/MovieDetailsPage/MovieDetails";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
