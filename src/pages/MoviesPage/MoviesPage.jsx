import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const initialValues = {
    query: "",
  };
  const query = searchParams.get("query") ?? "";
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  const handleSubmit = async (values, options) => {
    const results = await fetchMoviesByQuery(values.query);
    setMovies(results);
    options.resetForm();
    searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" placeholder="Enter movie" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default MoviesPage;
