import { GET_EXCHANGE_RATES_ERROR } from './const';

function action(parameter) {
  return { type: GET_EXCHANGE_RATES_ERROR, parameter };
}

module.exports = action;
