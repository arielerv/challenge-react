import React from 'react';
import PropTypes from 'prop-types';
import {bsStylePropTypes} from 'utils/propTypes';

import {Item, Stats, Title} from './styled';

const HeroInfo = ({
  title, attributes, isCard, $bsStyle,
}) => (
  <Stats $bsStyle={$bsStyle} isCard={isCard}>
    <Title>{title}</Title>
    {Object.entries(attributes).map(
      (key) => <Item>{`${key[0]}: ${(key[1] && key[1] !== 'null') ? key[1] : 'Unknown'}`}</Item>,
    )}
  </Stats>
);

HeroInfo.propTypes = {
  title: PropTypes.string.isRequired,
  attributes: PropTypes.shape({}).isRequired,
  isCard: PropTypes.bool,
  $bsStyle: bsStylePropTypes,
};

HeroInfo.defaultProps = {
  $bsStyle: '',
  isCard: false,
};

export default HeroInfo;
