import types from './types';

const initialState = {
  to: undefined,
  from: undefined,
  filter: 'cost',
  results: [],
  locations: [],
};

function path(state = initialState, action) {
  switch (action.type) {
    case types.SET_TO:
      return { ...state, to: action.payload };
    case types.SET_FROM:
      return { ...state, from: action.payload };
    case types.SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}

export default path;
