import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'styled/buttons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

const LoadingButton = ({
  label, type, isDisabled, isLoading,
}) => (
  <Button
    type={type}
    disabled={isDisabled}
    $bsStyle={{alignSelf: 'center', width: '180px'}}
  >
    {isLoading ? <FontAwesomeIcon icon={faSpinner} pulse /> : label}
  </Button>
);

LoadingButton.propTypes = {
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
};

LoadingButton.defaultProps = {
  isLoading: false,
  isDisabled: false,
  label: 'Guardar',
  type: 'submit',
};

export default LoadingButton;
