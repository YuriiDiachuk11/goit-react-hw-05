import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

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
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
