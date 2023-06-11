import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'services/movieAPI';
import {
  ReviewItem,
  ReviewList,
  ReviewText,
  ReviewTitle,
  ReviewWrap,
} from './Reviews.styled';

function Reviews() {
  const [reviews, setReviews] = useState();
  const params = useParams();

  useEffect(() => {
    async function fetchMoviesReviews() {
      const result = await getMoviesReviews(params.movieId);
      setReviews(result);
    }
    fetchMoviesReviews();
  }, [params]);

  return (
    <ReviewWrap>
      <ReviewList>
        {reviews && reviews.length !== 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewTitle>Author: {review.author}</ReviewTitle>
              <ReviewText>{review.content}</ReviewText>
            </ReviewItem>
          ))
        ) : (
          <ReviewTitle>Author: There is no reviews</ReviewTitle>
        )}
      </ReviewList>
    </ReviewWrap>
  );
}
export default Reviews;
