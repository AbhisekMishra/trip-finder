import apollo from '../utils/apollo';

import {
  getLocationsQuery, getShortestPathQuery
} from './path.gql';

const getLocations = () => apollo.query({
  query: getLocationsQuery,
});

const getShortestPath = (source, destination, filter) => apollo.query({
  query: getShortestPathQuery,
  variables: { source, destination, filter },
});

export { getLocations, getShortestPath };
