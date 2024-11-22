import { Field, Form, Formik } from "formik";

const MoviesPage = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const initialValues = {
    query: "",
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" placeholder="Enter movie" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MoviesPage;
