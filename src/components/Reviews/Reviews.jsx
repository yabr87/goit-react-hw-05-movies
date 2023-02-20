import { useParams } from 'react-router-dom';
import useFetch from 'utils/useFetch';
import { getReviews } from 'utils/movieApi';
import { ReviewsUnorderedList } from './Reviews.styles';
import Spiner from 'components/Spiner';

const Reviews = () => {
  const { id } = useParams();
  const reviews = useFetch(id, getReviews);

  if (!reviews) {
    return <Spiner />;
  }

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

// useEffect(() => {
//   if (reviews) {
//     return;
//   }

//   const fetchReviews = async () => {
//     try {
//       const reviews = await getReviews(id);
//       setReviews(reviews);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchReviews();
// });
