import styled from 'styled-components';

export const SearchbarBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const SearchbarForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 4px;
`;

export const SearchbarInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const SearchbarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  opacity: 0.5;
  background-color: white;
  transition: all, ease, 250ms;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
