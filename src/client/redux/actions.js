import types from './types';
import { getLocations, getShortestPath } from '../graphql/path.apollo';

/*
 * action creators
 */

const setSource = payload => ({
  type: types.SET_SOURCE,
  payload,
});

const setDestination = payload => ({
  type: types.SET_DESTINATION,
  payload,
});

const setFilter = payload => ({
  type: types.SET_FILTER,
  payload,
});

const setLocations = payload => ({
  type: types.SET_LOCATIONS,
  payload,
});

const startSearch = () => ({
  type: types.START_SEARCH,
});

const searchSuccess = payload => ({
  type: types.SEARCH_SUCCESS,
  payload,
});

const getLocationList = () => dispatch => getLocations().then((res) => {
  if (res.data.locations) {
    dispatch(setLocations(res.data.locations));
    return true;
  }
  console.log(res.errors[0].message);
  return false;
}).catch((err) => {
  console.log(err);
  return false;
});

const fetchShortestPath = ({ source, destination, filter }) => (dispatch) => {
  dispatch(startSearch());
  getShortestPath(source, destination, filter).then((res) => {
    if (res.data.locations) {
      dispatch(searchSuccess(res.data.locations));
      return true;
    }
    console.log(res.errors[0].message);
    return false;
  }).catch((err) => {
    console.log(err);
    return false;
  });
};
export {
  setSource, setDestination, setFilter, getLocationList, fetchShortestPath
};
