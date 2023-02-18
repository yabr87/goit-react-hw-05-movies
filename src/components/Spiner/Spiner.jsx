// import PropTypes from 'prop-types';
import { RotatingTriangles } from 'react-loader-spinner';
import { SpinnerBox, SpinnerBackdrop } from './Spiner.styles';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Spiner = () => {
  return createPortal(
    <SpinnerBackdrop>
      <SpinnerBox>
        <RotatingTriangles
          visible={true}
          height="70"
          width="70"
          ariaLabel="rotating-triangels-loading"
          wrapperClass="rotating-triangels-wrapper"
        />
      </SpinnerBox>
    </SpinnerBackdrop>,
    modalRoot
  );
};

// Spiner.propTypes = {
//   loading: PropTypes.bool.isRequired,
// };

export default Spiner;
