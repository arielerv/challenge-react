import {takeLatest, call, put} from 'redux-saga/effects';
import actionCreator, {heroesTypes} from 'store/heroes/actions';
import {requestFindHero, requestSearchHeroes} from 'services/heroes';

export function* findHero({heroId}) {
  try {
    const response = yield call(requestFindHero, heroId);
    yield put(actionCreator.heroesFindSuccess(response));
  } catch (error) {
    yield put(actionCreator.heroesFindError('Please, try again.'));
  }
}

export function* SearchHeroes({term}) {
  try {
    const response = yield call(requestSearchHeroes, term);
    if (response.error) {
      yield put(actionCreator.heroesSearchError(response.error));
    } else {
      yield put(actionCreator.heroesSearchSuccess(response.results));
    }
  } catch (error) {
    yield put(actionCreator.heroesSearchError('Please, try again.'));
  }
}

export function* heroesSaga() {
  yield takeLatest(heroesTypes.HEROES_FIND_REQUEST, findHero);
  yield takeLatest(heroesTypes.HEROES_SEARCH_REQUEST, SearchHeroes);
}
