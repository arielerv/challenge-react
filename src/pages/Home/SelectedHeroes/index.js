import React from 'react';
import {Row} from 'styled/base';
import {HeroCard} from 'components';
import {useSelector} from 'react-redux';
import {getSelectedHeroes} from 'store/heroes/selectors';

import {Title} from './styled';

const SelectedHeroes = () => {
  const heroes = useSelector(getSelectedHeroes);

  return (
    <>
      <Title>Selected</Title>
      <Row $bsStyle={{flexWrap: 'wrap'}}>
        {heroes.length > 0 && heroes.map((hero) => <HeroCard hero={hero} />)}
      </Row>
    </>
  );
};

export default SelectedHeroes;
