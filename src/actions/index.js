/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import addBitcoinAddress from '../actions/addBitcoinAddress.js';
import getBitcoinAddressesError from '../actions/getBitcoinAddressesError.js';
import getBitcoinAddressesSuccess from '../actions/getBitcoinAddressesSuccess.js';
import getBitcoinAddresses from '../actions/getBitcoinAddresses.js';
import getExchangeRatesError from '../actions/getExchangeRatesError.js';
import getExchangeRatesSuccess from '../actions/getExchangeRatesSuccess.js';
import getExchangeRates from '../actions/getExchangeRates.js';
import getBitcoinStatsError from '../actions/getBitcoinStatsError.js';
import getBitcoinStatsSuccess from '../actions/getBitcoinStatsSuccess.js';
import getBitcoinStats from '../actions/getBitcoinStats.js';
import loginError from '../actions/loginError.js';
import loginSuccess from '../actions/loginSuccess.js';
import logout from '../actions/logout.js';
import login from '../actions/login.js';
const actions = {
  login,
  logout,
  loginSuccess,
  loginError,
  getBitcoinStats,
  getBitcoinStatsSuccess,
  getBitcoinStatsError,
  getExchangeRates,
  getExchangeRatesSuccess,
  getExchangeRatesError,
  getBitcoinAddresses,
  getBitcoinAddressesSuccess,
  getBitcoinAddressesError,
  addBitcoinAddress
};
module.exports = actions;
