import React from 'react';
import {getErrorSearch, getHeroes, getSelectedHeroes} from 'store/heroes/selectors';
import actionCreator from 'store/heroes/actions';
import {useDispatch, useSelector} from 'react-redux';
import {MessageError} from 'components';

import SearchForm from './SearchForm';
import HeroesList from './HeroesList';
import {
  Container, SubTitle, Title, Intro,
} from './styled';

const Home = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(getHeroes);
  const selectedHeroes = useSelector(getSelectedHeroes);
  const limitSelectHero = 6;
  const errorSearch = useSelector(getErrorSearch);
  const handleAdd = (hero) => dispatch(actionCreator.setSelectedHero(hero));
  const handleRemove = (hero) => dispatch(actionCreator.removeSelectedHero(hero));

  const handleClick = (hero) => {
    if (selectedHeroes.includes(hero)) {
      return handleRemove(hero);
    }
    if (selectedHeroes.length < limitSelectHero) {
      return handleAdd(hero);
    }
    return null;
  };

  return (
    <Container>
      <Intro>Welcome to Super Heroes</Intro>
      <SearchForm />
      <HeroesList heroes={heroes} onClick={handleClick} />
      <MessageError message={errorSearch} />
      {selectedHeroes.length > 0 && (
      <>
        <Title>Selected Team</Title>
        <SubTitle>{`(Available: ${limitSelectHero - selectedHeroes.length} de ${limitSelectHero})`}</SubTitle>
      </>
      )}
      <HeroesList heroes={selectedHeroes} onRemove={handleRemove} noShowBorders />
    </Container>
  );
};

export default Home;
