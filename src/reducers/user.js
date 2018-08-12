/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT} from '../actions/const'

const initialState = {
    loggedIn: false,
    badCred: false,
    loggingIn: false
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case LOGIN:
    {
      nextState.loggingIn = true
      return nextState
    }
    break
    case LOGIN_SUCCESS:
      {
        nextState.loggedIn = true
        nextState.loggingIn = false
        nextState.badCred = false
        return nextState
      }
      break

      case LOGIN_ERROR:
      {
        nextState.badCred = true
        nextState.loggingIn = false
        return nextState
      }
      break

    case LOGOUT:
      {
        nextState.auth = null;
        return nextState;
      }
      break
    default:
      {
        /* Return original state if no actions were consumed. */
        return state
      }
  }
}

module.exports = reducer
