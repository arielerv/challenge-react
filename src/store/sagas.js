import {all} from 'redux-saga/effects';
import {authorizationSaga} from 'store/authorization/saga';
import {heroesSaga} from 'store/heroes/saga';

export default function* rootSaga() {
  yield all([
    authorizationSaga(),
    heroesSaga(),
  ]);
}
