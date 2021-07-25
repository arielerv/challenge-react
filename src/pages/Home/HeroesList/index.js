import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {HeroCard} from 'components';
import {heroPropTypes} from 'utils/propTypes';
import {useSelector} from 'react-redux';
import {getSelectedHeroes} from 'store/heroes/selectors';
import Slider from 'react-slick';
import {sliderSetting} from 'constant';

import {Container, WrapperCarrousel} from './styled';

const HeroesList = ({
  heroes, onClick, onRemove, noShowBorders,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const selectedHeroes = useSelector(getSelectedHeroes);
  const getIsSelected = (hero) => selectedHeroes.includes(hero);

  return (
    <Container>
      {heroes?.length > 0 && (
      <WrapperCarrousel>
        <Slider {...sliderSetting} beforeChange={() => setIsDragging(true)} afterChange={() => setIsDragging(false)}>
          {heroes.map((hero) => (
            <HeroCard
              isSelected={getIsSelected(hero)}
              isDragging={isDragging}
              onRemove={onRemove}
              onClick={onClick}
              hero={hero}
              noShowBorders={noShowBorders}
            />
          ))}
        </Slider>
      </WrapperCarrousel>
      )}
    </Container>
  );
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(heroPropTypes).isRequired,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  noShowBorders: PropTypes.bool,
};

HeroesList.defaultProps = {
  onClick: undefined,
  onRemove: undefined,
  noShowBorders: false,
};

export default HeroesList;
