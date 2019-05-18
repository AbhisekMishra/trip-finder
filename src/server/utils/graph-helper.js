const convertArrayToObjectWithKey = (array, key) => {
  let obj = {};
  array.forEach((arr) => {
    obj = Object.assign(obj, arr[key]);
  });
  return obj;
};

const convertArrayToObject = (array) => {
  let obj = {};
  array.forEach((arr) => {
    obj = Object.assign(obj, arr);
  });
  return obj;
};

const extractAllElementWithKey = (array, key) => convertArrayToObjectWithKey(array.filter(arr => Object.keys(arr)[0] === key), key);

const getUniqueObjKeys = (fares, key) => [...new Set(fares.map(fare => fare[key]))];

const connectTransportKeys = (faresObj, fares) => {
  const faresObjClone = { ...faresObj };
  const uniqueDepartureKeys = getUniqueObjKeys(fares, 'departure');
  const transportArr = getUniqueObjKeys(fares, 'transport');
  uniqueDepartureKeys.forEach((source) => {
    const transportObjArr = transportArr.map(t => ({ [`${source}#${t}`]: 0 }));
    const transportObj = convertArrayToObject(transportObjArr);
    faresObjClone[source] = transportObj;
    transportArr.forEach((transport) => {
      const otherTransportArr = transportArr.filter(t => transport !== t);
      const otherTransportObjArr = otherTransportArr.map(t => ({ [`${source}#${t}`]: 0 }));
      faresObjClone[`${source}#${transport}`] = Object.assign(faresObjClone[`${source}#${transport}`], convertArrayToObject(otherTransportObjArr), { [source]: 0 });
    });
  });
  return faresObj;
};

const getWeight = (fare, filter) => {
  if (filter === 'cost') {
    return { [`${fare.arrival}#${fare.transport}`]: fare.cost - (fare.discount * fare.cost) / 100 };
  }
  if (filter === 'time') {
    return { [`${fare.arrival}#${fare.transport}`]: (parseInt(fare.duration.h, 10) * 60) + parseInt(fare.duration.m, 10) };
  }
  return null;
};

const getUniqueDepartureTransportKeys = fares => [...new Set(fares.map(fare => `${fare.departure}#${fare.transport}`))];

export {
  extractAllElementWithKey,
  convertArrayToObjectWithKey,
  convertArrayToObject,
  connectTransportKeys,
  getWeight,
  getUniqueObjKeys,
  getUniqueDepartureTransportKeys,
};
