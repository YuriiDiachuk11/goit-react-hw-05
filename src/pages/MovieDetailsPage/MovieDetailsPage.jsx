import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location);
  const goBackLink = useRef(location.state ?? "/");

  useEffect(() => {
    const getDetails = async () => {
      const details = await fetchMovieById(movieId);
      setMovie(details);
    };
    getDetails();
  }, [movieId]);
  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Link to={goBackLink.current}>Go back</Link>
      <img src={movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>Vote Average: {movie.vote_average}</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
