import { GET_BITCOIN_STATS } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_STATS, parameter };
}

module.exports = action;
