import {createReducer} from 'reduxsauce';
import {authTypes} from 'store/authorization/actions';
import {initialState} from 'store/authorization/initial-state';

const loginRequest = (state) => ({
  ...state,
  isLoading: true,
  error: null,
  token: null,
});

const loginSuccess = (state, {token}) => ({
  ...state,
  token,
  isLoading: false,
  error: null,
});

const loginError = (state, {error}) => ({
  ...state,
  error,
  token: null,
  isLoading: false,
  data: null,
});

const getTokenRequest = (state) => ({
  ...state,
  isLoadingToken: true,
  isRequested: false,
  error: null,
  token: null,
});

const getTokenSuccess = (state, {token}) => ({
  ...state,
  token,
  isLoadingToken: false,
  isRequested: true,
  error: null,
});

const getTokenError = (state, {error}) => ({
  ...state,
  error,
  token: null,
  isLoadingToken: false,
  isRequested: true,
});

const cleanState = (state) => ({
  ...state,
  error: initialState.error,
  isLoading: initialState.isLoading,
});

const reducer = createReducer(initialState, {
  [authTypes.AUTH_LOGIN_REQUEST]: loginRequest,
  [authTypes.AUTH_LOGIN_SUCCESS]: loginSuccess,
  [authTypes.AUTH_LOGIN_ERROR]: loginError,

  [authTypes.AUTH_GET_TOKEN_REQUEST]: getTokenRequest,
  [authTypes.AUTH_GET_TOKEN_SUCCESS]: getTokenSuccess,
  [authTypes.AUTH_GET_TOKEN_ERROR]: getTokenError,

  [authTypes.AUTH_CLEAN_STATE]: cleanState,
});

export default reducer;
