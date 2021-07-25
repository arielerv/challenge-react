import http from './http';

export const requestLogin = (email, password) => http.login('/', {email, password});
