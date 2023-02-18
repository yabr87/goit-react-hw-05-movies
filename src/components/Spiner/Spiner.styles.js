import styled from 'styled-components';

export const SpinnerBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(2px);
  z-index: 998;
`;

export const SpinnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
