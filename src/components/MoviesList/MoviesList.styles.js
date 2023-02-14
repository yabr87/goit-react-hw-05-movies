import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesUnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 16px;
  padding: 16px 16px;
`;

export const MovieItem = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transition: all, ease, 250ms;

  &:hover {
    transform: scale(1.03);
  }
`;

export const MovieLink = styled(Link)`
  display: grid;
  grid-template-rows: 1fr 54px;
`;

export const MovieTitle = styled.p`
  display: flex;
  height: 54px;
  padding: 8px;
  font-size: 16px;
`;

export const MoviePoster = styled.img`
  height: 100%;
`;
