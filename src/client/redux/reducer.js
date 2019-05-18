import types from './types';

const initialState = {
  source: undefined,
  destination: undefined,
  filter: 'cost',
  result: [],
  locations: [],
  isSearching: false,
};

function path(state = initialState, action) {
  switch (action.type) {
    case types.SET_SOURCE:
      return { ...state, source: action.payload };
    case types.SET_DESTINATION:
      return { ...state, destination: action.payload };
    case types.SET_FILTER:
      return { ...state, filter: action.payload };
    case types.SET_LOCATIONS:
      return { ...state, locations: action.payload };
    case types.START_SEARCH:
      return { ...state, result: [], isSearching: true };
    case types.SEARCH_SUCCESS:
      return { ...state, result: action.payload, isSearching: false };
    default:
      return state;
  }
}

export default path;
