import React, { useState } from 'react';
import { TfiSearch } from 'react-icons/tfi';
import PropTypes from 'prop-types';
import {
  SearchbarForm,
  SearchbarInput,
  SearchbarBtn,
  SearchbarBox,
} from './Searchbar.styles';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <SearchbarBox>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarInput
          onChange={e => setSearch(e.target.value)}
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="search"
          required
        />
        <SearchbarBtn type="submit">
          <TfiSearch size="28" />
        </SearchbarBtn>
      </SearchbarForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
