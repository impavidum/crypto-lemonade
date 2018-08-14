import { GET_BITCOIN_STATS_ERROR } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_STATS_ERROR, parameter };
}

module.exports = action;
