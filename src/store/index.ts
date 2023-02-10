import { atom } from 'jotai';

const countState = atom(0);
const countryState = atom('korea');
const citiesState = atom(['seoul', 'busan']);

export { countState, countryState, citiesState };
