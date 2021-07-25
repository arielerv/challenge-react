import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getHero, getIsLoading} from 'store/heroes/selectors';
import actionCreator from 'store/heroes/actions';
import {useParams} from 'react-router';
import {HeroInfo, LoadingPage} from 'components';
import {Column, Row} from 'styled/base';
import {commonWidthStyle} from 'styled/inputs';

import {
  Container, Wrapper, Photo, Title, informationColumn,
} from './styled';

const Hero = () => {
  const dispatch = useDispatch();
  const {heroId} = useParams();
  const hero = useSelector(getHero);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(actionCreator.heroesFindRequest(heroId));
  }, []);

  return (
    <Container>
      {isLoading && <LoadingPage />}
      {!isLoading && hero && (
      <Wrapper>
        <Title>{hero.name}</Title>
        <Row $bsStyle={{flexWrap: 'wrap'}}>
          <Column $bsStyle={commonWidthStyle}>
            <Photo image={hero.image.url} />
          </Column>
          <Column flex $bsStyle={informationColumn}>
            <HeroInfo attributes={hero.appearance} title="Appearance" withMargin />
            <HeroInfo attributes={hero.biography} title="Biography" withMargin />
            <HeroInfo attributes={hero.work} title="Work" withMargin />
            <HeroInfo attributes={hero.powerstats} title="Stats" withMargin />
          </Column>
        </Row>
      </Wrapper>
      )}
    </Container>
  );
};

export default Hero;
