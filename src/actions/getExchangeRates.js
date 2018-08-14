import { GET_EXCHANGE_RATES } from './const';

function action(parameter) {
  return { type: GET_EXCHANGE_RATES, parameter };
}

module.exports = action;
