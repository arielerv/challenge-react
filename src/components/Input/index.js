import React from 'react';
import PropTypes from 'prop-types';
import {Input as InputStyled} from 'styled/inputs';
import {bsStylePropTypes} from 'utils/propTypes';

import {Container, Label} from './styled';

const Input = ({
  label, name, bsStyle, component, noFormik, ...props
}) => (
  <Container key={`input-${name}`} $bsStyle={bsStyle}>
    <Label htmlFor={name} visible={!!label}>{label}</Label>
    <InputStyled
      id={name}
      name={name}
      $component={component}
      $bsStyle={{marginBottom: 0}}
      noFormik={noFormik}
      {...props}
    />
  </Container>
);

Input.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  noFormik: PropTypes.bool,
  bsStyle: bsStylePropTypes,
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.elementType,
  ]),
};

Input.defaultProps = {
  name: 'input',
  noFormik: false,
  label: undefined,
  component: undefined,
  bsStyle: undefined,
};

export default Input;
