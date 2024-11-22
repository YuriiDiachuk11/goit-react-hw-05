import { Field, Form, Formik } from "formik";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const handleSubmit = async (values, options) => {
    const results = await fetchMoviesByQuery(values.query);
    setMovies(results);
    setQuery(values.query);
    options.resetForm();
  };
  const initialValues = {
    query: "",
  };
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

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
