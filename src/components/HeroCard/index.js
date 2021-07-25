import React from 'react';
import PropTypes from 'prop-types';
import {heroPropTypes} from 'utils/propTypes';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
import {routes} from 'constant';
import {HeroInfo} from 'components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfo} from '@fortawesome/free-solid-svg-icons';
import {
  Container, Wrapper, Title, Close, ButtonInfo,
} from './styled';

const HeroCard = ({
  hero, onClick, isSelected, onRemove, noShowBorders, isDragging,
}) => {
  const dispatch = useDispatch();

  const handleInfo = (e) => {
    e.stopPropagation();
    dispatch(push(`${routes.HERO}/${hero.id}`));
  };

  const handleClick = () => {
    if (isDragging) {
      return null;
    }
    return onClick ? onClick(hero) : onRemove(hero);
  };

  return (
    <Container
      image={hero.image.url}
      onClick={handleClick}
      isSelected={isSelected}
      noShowBorders={noShowBorders}
    >
      {!noShowBorders && isSelected && <Close />}
      <Wrapper>
        <Title>{hero.name}</Title>
        <ButtonInfo onClick={handleInfo}>
          <FontAwesomeIcon icon={faInfo} />
        </ButtonInfo>
        <HeroInfo attributes={hero.powerstats} title="power stats" $bsStyle={{position: 'absolute'}} />
      </Wrapper>
    </Container>
  );
};

HeroCard.propTypes = {
  hero: heroPropTypes.isRequired,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  isSelected: PropTypes.bool,
  isDragging: PropTypes.bool,
  noShowBorders: PropTypes.bool,
};

HeroCard.defaultProps = {
  onClick: undefined,
  onRemove: undefined,
  isSelected: false,
  isDragging: false,
  noShowBorders: false,
};

export default HeroCard;
