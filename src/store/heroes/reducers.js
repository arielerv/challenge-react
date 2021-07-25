import {createReducer} from 'reduxsauce';
import {heroesTypes} from 'store/heroes/actions';
import {initialState} from 'store/heroes/initial-state';

const findRequest = (state) => ({
  ...state,
  isLoading: true,
  error: initialState.error,
  hero: initialState.hero,
});

const findSuccess = (state, {hero}) => ({
  ...state,
  hero,
  isLoading: initialState.isLoading,
  error: initialState.error,
});

const findError = (state, {error}) => ({
  ...state,
  error,
  isLoading: initialState.isLoading,
  hero: initialState.hero,
});

const searchRequest = (state) => ({
  ...state,
  isSearching: true,
  errorSearch: initialState.errorSearch,
  hero: initialState.hero,
  heroes: initialState.heroes,
});

const searchSuccess = (state, {heroes}) => ({
  ...state,
  heroes,
  isSearching: initialState.isSearching,
  errorSearch: initialState.errorSearch,
});

const searchError = (state, {errorSearch}) => ({
  ...state,
  errorSearch,
  isSearching: initialState.isSearching,
  hero: initialState.hero,
});

const setHero = (state, {hero}) => {
  const newSelectedHeroes = state.selectedHeroes.slice();
  newSelectedHeroes.push(hero);
  return {
    ...state,
    isLoading: true,
    error: initialState.error,
    selectedHeroes: newSelectedHeroes,
  };
};

const removeHero = (state, {hero}) => {
  const selectedHeroes = state.selectedHeroes.slice();
  const selectedHeroesIndex = selectedHeroes.indexOf(hero);
  selectedHeroes[selectedHeroesIndex] = undefined;
  const newSelectedHeroes = selectedHeroes.filter(Boolean);
  return {
    ...state,
    isLoading: true,
    error: initialState.error,
    selectedHeroes: newSelectedHeroes,
  };
};

const cleanState = (state) => ({...state, ...initialState});

const reducer = createReducer(initialState, {
  [heroesTypes.HEROES_FIND_REQUEST]: findRequest,
  [heroesTypes.HEROES_FIND_SUCCESS]: findSuccess,
  [heroesTypes.HEROES_FIND_ERROR]: findError,

  [heroesTypes.HEROES_SEARCH_REQUEST]: searchRequest,
  [heroesTypes.HEROES_SEARCH_SUCCESS]: searchSuccess,
  [heroesTypes.HEROES_SEARCH_ERROR]: searchError,

  [heroesTypes.SET_SELECTED_HERO]: setHero,
  [heroesTypes.REMOVE_SELECTED_HERO]: removeHero,

  [heroesTypes.HEROES_CLEAN_STATE]: cleanState,
});

export default reducer;
