import { LOGOUT } from './const';

function action(parameter) {
  return { type: LOGOUT, parameter };
}

module.exports = action;
