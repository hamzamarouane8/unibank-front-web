import moment from 'moment';
import isNumber from 'lodash.isnumber';

export default {

  format: (date, format) => moment(date).format(format || 'DD/MM/YYYY'),

  parse: (str, format) => {
    if (!str) return null;
    if (isNumber(str)) return moment(str).toDate();
    return moment(str, format || 'DD/MM/YYYY').toDate();
  },

  minusMonth: (number) => moment().subtract(number, 'months').toDate(),

  plusYears: (number) =>  moment().add(number, 'years').toDate(),

  plusMonths: (number) => moment().add(number, 'months').toDate(),

  /**
   * timestamp value
   * @param value
   * @returns {number}
   */
  valueOf: (value) => {
    if (!value) return null;
    return moment(value).valueOf();
  },

};
