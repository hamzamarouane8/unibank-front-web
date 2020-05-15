import sum from 'lodash.sum';
import get from 'lodash.get';

const Math = {

  sumValues: (map) => {
    if (!map) return 0;
    const values = Object.values(map).map((it) => parseInt(it));
    return sum(values);
  },

  sumBy: (array, key) => {
    if (!array) return 0;
    return sum(array.map((item) => parseInt(get(item, key) || 0)));
  },

  metreToKilometre : (value) => {
    var km = value;
    return km.toFixed(2) + " km"
  }

};


export default Math;
