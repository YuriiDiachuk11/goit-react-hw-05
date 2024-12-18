import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../services/api";
import getImage from "../../services/imageBaseURL";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      const cast = await fetchMovieCastById(movieId);
      setCast(cast);
    };
    getCast();
  }, [movieId]);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li className={s.item} key={actor.id}>
            <img
              className={s.image}
              src={getImage(actor.profile_path)}
              alt={actor.name}
              width="100"
            />
            <p className={s.name}>{actor.name}</p>
            <p className={s.character}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
