import { GET_BITCOIN_ADDRESSES_ERROR } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_ADDRESSES_ERROR, parameter };
}

module.exports = action;
