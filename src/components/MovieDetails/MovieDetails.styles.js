import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviePoster = styled.img`
  border-radius: 8px;
`;

export const MovieBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 16px;
  padding: 16px;
`;

export const MovieText = styled.div`
  margin-top: 16px;
`;

export const GoBackLink = styled(Link)`
  position: absolute;
  top: 32px;
  left: 0;
  z-index: 2;
  background-color: white;
  display: inline-flex;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
