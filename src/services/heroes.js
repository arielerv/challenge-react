import http from './http';

export const requestFindHero = (heroId) => http.get(`/${heroId}`);

export const requestSearchHeroes = (term) => http.get(`/search/${term}`);
