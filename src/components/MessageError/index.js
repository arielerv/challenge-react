import React from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage} from 'formik';

import {Error, EmptyDiv} from './styled';

const MessageError = ({name, message, $bsStyle}) => {
  if (message) {
    return <Error $bsStyle={$bsStyle}>{message}</Error>;
  }
  if (!name) {
    return <EmptyDiv $bsStyle={$bsStyle} />;
  }
  return (
    <ErrorMessage
      name={name}
      render={(msg) => {
        if (msg.length <= 1) {
          return null;
        }
        return <Error $bsStyle={$bsStyle}>{msg}</Error>;
      }}
    />
  );
};

MessageError.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  $bsStyle: PropTypes.shape({}),
};

MessageError.defaultProps = {
  message: null,
  name: null,
  $bsStyle: undefined,
};

export default MessageError;
