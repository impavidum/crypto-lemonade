import { LOGIN_SUCCESS } from './const';

function action(parameter) {
  return { type: LOGIN_SUCCESS, parameter };
}

module.exports = action;
