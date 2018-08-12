import 'babel-polyfill'

import { call, put, takeEvery } from 'redux-saga/effects'

// Hello Saga
export function* helloSaga() {
  console.log('Template Sagas are running!')
}

// single entry point to start all Sagas at once
export default function* templateSagas() {
  yield [
   helloSaga()
  ]
}