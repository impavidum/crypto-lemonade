import { ADD_BITCOIN_ADDRESS } from './const';

function action(parameter) {
  return { type: ADD_BITCOIN_ADDRESS, parameter };
}

module.exports = action;
