import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'utils/movieApi';
import { ReviewsUnorderedList } from './Reviews.styles';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (reviews) {
      return;
    }

    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(id);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
  });

  return (
    <>
      {!reviews?.length ? (
        <p>There is no reviews yet.</p>
      ) : (
        <ReviewsUnorderedList>
          {reviews.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <b>{author}:</b>
                <p>{content}</p>
              </li>
            );
          })}
        </ReviewsUnorderedList>
      )}
    </>
  );
};

export default Reviews;
