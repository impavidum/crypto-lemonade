import { GET_EXCHANGE_RATES_SUCCESS } from './const';

function action(parameter) {
  return { type: GET_EXCHANGE_RATES_SUCCESS, parameter };
}

module.exports = action;
