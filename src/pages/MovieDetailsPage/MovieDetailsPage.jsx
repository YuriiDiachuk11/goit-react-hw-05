import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import getImage from "../../services/imageBaseURL";
import s from "./MovieDetailsPage.module.css";

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
    <div className={s.box}>
      <Link to={goBackLink.current} className={s.link}>
        Go back
      </Link>

      <div className={s.movieDetails}>
        <div className={s.image}>
          <img
            src={getImage(movie.poster_path)}
            alt={movie.title}
            width="300"
          />
        </div>
        <div className={s.info}>
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>
            <strong>Overview:</strong>
          </p>
          <p>{movie.overview}</p>

          {movie.genres && movie.genres.length > 0 && (
            <div>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
              <p>
                <strong>User rating:</strong>
              </p>
              <p>{movie.vote_average}</p>
            </div>
          )}
        </div>
      </div>
      <nav className={s.nav}>
        <p>Additional information</p>
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
