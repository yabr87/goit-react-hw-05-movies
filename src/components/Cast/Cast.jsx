import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'utils/movieApi';
import { CastUnorderedList } from './Cast.styles';
import Spiner from 'components/Spiner';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (cast) {
      return;
    }

    const fetchCast = async () => {
      try {
        const cast = await getCast(id);
        setCast(cast.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  });

  if (!cast) {
    return <Spiner />;
  }

  return (
    <>
      {!cast?.length ? (
        <p>Information about the list of actors is not available.</p>
      ) : (
        <CastUnorderedList>
          {cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w400/${profile_path}`
                      : `https://via.placeholder.com/160x240`
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </li>
            );
          })}
        </CastUnorderedList>
      )}
    </>
  );
};

export default Cast;
