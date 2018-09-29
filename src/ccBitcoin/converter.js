/* eslint-disable import/prefer-default-export */
import Currency from './model';

export default ({
  bpi: {
    EUR: {
      rate_float: euroRate,
    },
  },
  bpi: {
    EUR: {
      code: euroName,
    },
  },
  bpi: {
    USD: {
      rate_float: dolarRate,
    },
  },
  bpi: {
    USD: {
      code: dolarName,
    },
  },
  bpi: {
    GBP: {
      rate_float: poundRate,
    },
  },
  bpi: {
    GBP: {
      code: poundName,
    },
  },
  chartName: name,
  disclaimer,
}) => new Currency({
  poundRate,
  poundName,
  euroRate,
  euroName,
  dolarRate,
  dolarName,
  name,
  disclaimer,
});
