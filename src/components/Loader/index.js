import PropTypes from 'prop-types';
import Spinner from '../Spinner';

import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <Overlay>
      <Spinner size={90} />
    </Overlay>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
