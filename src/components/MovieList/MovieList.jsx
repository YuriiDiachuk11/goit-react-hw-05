import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import getImage from "../../services/imageBaseURL";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.item} key={movie.id}>
            <Link
              className={s.movieLink}
              to={`/movies/${movie.id.toString()}`}
              state={location}
            >
              <div className={s.imageWrapper}>
                <img
                  className={s.image}
                  src={getImage(movie.poster_path)}
                  alt={movie.title}
                  loading="lazy"
                />
              </div>
              <div className={s.info}>
                <h3 className={s.movieTitle}>{movie.title}</h3>
                {movie.vote_average && (
                  <p className={s.rating}>⭐ {movie.vote_average.toFixed(1)}</p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
