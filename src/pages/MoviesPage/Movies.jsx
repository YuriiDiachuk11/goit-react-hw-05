import { NavLink, Outlet } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <h2>Movies</h2>
      <nav>
        <NavLink to=""></NavLink>
        <NavLink to=""></NavLink>
        <NavLink to=""></NavLink>
        <NavLink to=""></NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Movies;
