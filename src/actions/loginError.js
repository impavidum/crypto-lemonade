import { LOGIN_ERROR } from './const';

function action(parameter) {
  return { type: LOGIN_ERROR, parameter };
}

module.exports = action;
