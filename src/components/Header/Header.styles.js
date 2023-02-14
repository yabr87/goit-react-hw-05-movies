import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const AppHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 120px 120px;
  gap: 20px;
  padding: 10px;

  background-color: #24292f;
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 22px;
  letter-spacing: 3px;
  line-height: 1.6;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  padding: 0px 5px;
  transition: all, ease, 250ms;

  &.active {
    background-color: red;
  }
  &:hover:not(.active) {
    color: #babcbe;
  }
`;

export const LogoNavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all, ease, 250ms;
  margin-right: auto;

  color: #fff;
  &:hover:not(.active) {
    color: #babcbe;
  }
`;
