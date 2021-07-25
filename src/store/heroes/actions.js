import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  heroesFindRequest: ['heroId'],
  heroesFindSuccess: ['hero'],
  heroesFindError: ['error'],

  heroesSearchRequest: ['term'],
  heroesSearchSuccess: ['heroes'],
  heroesSearchError: ['errorSearch'],

  setSelectedHero: ['hero'],
  removeSelectedHero: ['hero'],

  heroesCleanState: [null],
});

export const heroesTypes = Types;

export default Creators;
