import { getLocationList } from '../../controllers/graph-controller';

export default {
  Query: {
    getLocations: async () => getLocationList(),
  },
};
