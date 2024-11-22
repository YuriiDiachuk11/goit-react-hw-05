import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCastById } from "../../services/api";

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
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img src={actor.profile_path} alt="" />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
