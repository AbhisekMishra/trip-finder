import Graph from '../utils/graph';
import faresJSON from '../data/fares';
import {
  extractAllElementWithKey,
  convertArrayToObject,
  connectTransportKeys,
  getWeight,
  getUniqueDepartureTransportKeys,
  getUniqueObjKeys,
  transferShortestPathToReturnableObject,
} from '../utils/graph-helper';

const fares = faresJSON.deals;

const getLocationList = () => getUniqueObjKeys(fares, 'departure');

const calculateShortestPath = (source, destination, filter) => {
  const uniqueDepartureTransportKeys = getUniqueDepartureTransportKeys(fares);

  const convertedFaresNonUniq = fares.map(fare => ({ [`${fare.departure}#${fare.transport}`]: getWeight(fare, filter) }));
  const convertedFaresUniq = uniqueDepartureTransportKeys.map(key => ({ [key]: extractAllElementWithKey(convertedFaresNonUniq, key) }));

  const convertedFaresObj = convertArrayToObject(convertedFaresUniq);
  const faresObj = connectTransportKeys(convertedFaresObj, fares);
  const graph = new Graph(faresObj);
  const shortestPath = graph.findShortestPath(source, destination);
  return transferShortestPathToReturnableObject(shortestPath, fares);
};

export { getLocationList, calculateShortestPath };
