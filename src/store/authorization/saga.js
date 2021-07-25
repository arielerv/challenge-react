import {takeLatest, call, put} from 'redux-saga/effects';
import {getToken, setToken} from 'services/storage';
import actionCreator, {authTypes} from 'store/authorization/actions';
import {requestLogin} from 'services/authorization';

export function* login({email, password}) {
  try {
    const response = yield call(requestLogin, email, password);
    if (response.error) {
      yield put(actionCreator.authLoginError(response.error));
    } else {
      yield setToken(response.token);
      yield put(actionCreator.authLoginSuccess(response.token));
    }
  } catch (error) {
    yield put(actionCreator.authLoginError('Please, try again.'));
  }
}

export function* tokenRequest() {
  try {
    const token = yield call(getToken);
    yield put(actionCreator.authGetTokenSuccess(token));
  } catch (error) {
    yield put(actionCreator.authGetTokenError('error'));
  }
}

export function* authorizationSaga() {
  yield takeLatest(authTypes.AUTH_LOGIN_REQUEST, login);
  yield takeLatest(authTypes.AUTH_GET_TOKEN_REQUEST, tokenRequest);
}
