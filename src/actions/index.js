/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import loginError from '../actions/loginError.js';
import loginSuccess from '../actions/loginSuccess.js';
import logout from '../actions/logout.js';
import login from '../actions/login.js';
const actions = {
  login,
  logout,
  loginSuccess,
  loginError
};
module.exports = actions;
