import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  authLoginRequest: ['email', 'password'],
  authLoginSuccess: ['token'],
  authLoginError: ['error'],

  authGetTokenRequest: [null],
  authGetTokenSuccess: ['token'],
  authGetTokenError: ['error'],

  authCleanState: [null],
});

export const authTypes = Types;

export default Creators;
