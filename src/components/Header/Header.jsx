import React from 'react';
import { AppHeader, HeaderNavLink, LogoNavLink } from './Header.styles';
import { FiFilm } from 'react-icons/fi';

const Header = () => {
  return (
    <AppHeader>
      <LogoNavLink to="/">
        <FiFilm size="32" />
      </LogoNavLink>

      <HeaderNavLink to="/">Home</HeaderNavLink>
      <HeaderNavLink to="/movies">Movies</HeaderNavLink>
    </AppHeader>
  );
};

export default Header;
