import 'babel-polyfill'
import axios from 'axios'
import {call, put, takeEvery, select} from 'redux-saga/effects'
import { browserHistory } from 'react-router';

import {base64Encode} from './helpers'

const getUser = state => state.user;

// Login Saga
export function * login(action) {

  // Pull user off the store
  const user = yield select(getUser)

  // variables
  let endpoint = "login/"
  let method = "POST"
  let authorization = base64Encode(action.parameter.email + ':' + action.parameter.password)

  // Init axios defaults
  axios.defaults.baseURL = 'https://www.presscleaners.com/api/'
  axios.defaults.headers.common['Authorization'] = 'Basic ' + authorization

  try {
    const resp = yield call(axios.post, endpoint)
    yield put({type: 'LOGIN_SUCCESS', payload: authorization})
    localStorage.setItem('pressAuth', authorization)
    browserHistory.push('/')

  } catch (err) {
    yield put({type: 'LOGIN_ERROR', payload: err})
  }

}

// Login Watch
export function * watchLogin() {
  yield takeEvery('LOGIN', login)
}

// single entry point to start all Sagas at once
export default function * userSagas() {
  yield[watchLogin()]
}