import { getLocationList, calculateShortestPath } from '../../controllers/graph-controller';

export default {
  Query: {
    getLocations: async () => getLocationList(),
    getShortestPath: async (_, { source, destination, filter }) => calculateShortestPath(source, destination, filter),
  },
};
