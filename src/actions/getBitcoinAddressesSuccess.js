import { GET_BITCOIN_ADDRESSES_SUCCESS } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_ADDRESSES_SUCCESS, parameter };
}

module.exports = action;
