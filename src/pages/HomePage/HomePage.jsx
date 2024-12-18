import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className={s.title}>🎬 Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
