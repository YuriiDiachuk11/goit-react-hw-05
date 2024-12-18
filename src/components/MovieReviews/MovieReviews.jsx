import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewsById } from "../../services/api";
import s from "./MovieReviews.module.css";
const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMovieReviewsById(movieId);
      setReviews(data);
    };
    getReviews();
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li className={s.item} key={review.id}>
            <h4 className={s.author}>{review.author}</h4>
            <p className={s.content}>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
