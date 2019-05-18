import types from './types';
// import { getLocations, getShortestPath } from '../graphql/path.apollo';

/*
 * action creators
 */

const setTo = payload => ({
  type: types.SET_TO,
  payload,
});

const setFrom = payload => ({
  type: types.SET_FROM,
  payload,
});

const setFilter = payload => ({
  type: types.SET_FILTER,
  payload,
});

export { setTo, setFrom, setFilter };
