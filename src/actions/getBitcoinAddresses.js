import { GET_BITCOIN_ADDRESSES } from './const';

function action(parameter) {
  return { type: GET_BITCOIN_ADDRESSES, parameter };
}

module.exports = action;
