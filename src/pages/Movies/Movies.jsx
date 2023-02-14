//import { Test } from './Movies.styles';

import Searchbar from 'components/Searchbar';

const Movies = () => {
  const onFormSubmit = () => {
    console.log('movie');
  };

  return <Searchbar onSubmit={onFormSubmit} />;
};

export default Movies;
