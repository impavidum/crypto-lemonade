import { GET_BITCOIN_STATS_SUCCESS } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_STATS_SUCCESS, parameter };
}

module.exports = action;
