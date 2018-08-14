import 'babel-polyfill'
import axios from 'axios'
import {
  call,
  put,
  takeEvery,
  select
} from 'redux-saga/effects'
import {
  browserHistory
} from 'react-router';

// Get Bitcoin instance handle
const getBitcoin = state => state.bitcoin;

// Exchange Rates Saga
export function* getExchangeRates(action) {

  // Blockchain API
  axios.defaults.baseURL = 'https://blockchain.info';
  let endpoint = "/ticker";

  try {
    const resp = yield call(axios.get, endpoint)
    console.log(resp)

    // Format response before propagating to redux store
    let formattedExchangeRates = [];
    if (resp.data) {
      for (const [key, value] of Object.entries(resp.data)) {
        formattedExchangeRates.push({ ...value,
          name: key
        })
      }
    }
    console.log(formattedExchangeRates)

    yield put({
      type: 'GET_EXCHANGE_RATES_SUCCESS',
      payload: formattedExchangeRates
    })

  } catch (err) {
    yield put({
      type: 'GET_EXCHANGE_RATES_ERROR'
    });
    console.log(err);
  }

}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

console.log(formatDate(new Date()));


// Bitcoin Stats Saga
export function* getBitcoinStats(action) {

  // Blockchain API
  axios.defaults.baseURL = 'https://blockchain.info';
  let endpoint = `/charts/market-price?timespan=${action.parameter}days&format=json&lang=en&cors=true`;

  try {
    const resp = yield call(axios.get, endpoint)

    // Format response before propagating to redux store
    let formattedBitcoinStatsValues = [];
    if (resp.data && resp.data.values) {
      resp.data.values.forEach((value, index, array) => {
        formattedBitcoinStatsValues.push({
          name: formatDate(new Date(value.x)),
          USD: parseFloat(value.y.toFixed(2))
        })
      });
      resp.data.values = formattedBitcoinStatsValues;
    }

    yield put({
      type: 'GET_BITCOIN_STATS_SUCCESS',
      payload: resp.data
    })

  } catch (err) {
    yield put({
      type: 'GET_BITCOIN_STATS_ERROR'
    });
    console.log(err);
  }

}

// Get Bitcoin Addresses Saga
export function* getBitcoinAddresses(action) {

  // Testnet API
  axios.defaults.baseURL = 'https://testnet.blockchain.info';

  // Pull bitcoin instance off the store
  const bitcoin = yield select(getBitcoin)

  // Build endpoint from bitcoin address list
  let endpoint = `multiaddr?active=`;
  bitcoin.bitcoinAddresses.forEach((address, index, array) => {
    if (index == 0) {
      endpoint += address;
    } else {
      endpoint += `|${address}`
    }
  })

  endpoint += '&cors=true'

  try {
    const resp = yield call(axios.get, endpoint)
    yield put({
      type: 'GET_BITCOIN_ADDRESSES_SUCCESS',
      payload: resp.data
    })
  

  } catch (err) {
    yield put({
      type: 'GET_BITCOIN_ADDRESSES_ERROR'
    });
    console.log(err);
  }

}

// Get Exchange Rates Watch
export function* watchGetExchangeRates() {
  yield takeEvery('GET_EXCHANGE_RATES', getExchangeRates)
}

// Get Bitcoin Stats Watch
export function* watchBitcoinStatsRates() {
  yield takeEvery('GET_BITCOIN_STATS', getBitcoinStats)
}

// Get Bitcoin Addresses Watch
export function* watchGetBitcoinAddresses() {
  yield takeEvery('GET_BITCOIN_ADDRESSES', getBitcoinAddresses)
}

// single entry point to start all Sagas at once
export default function* bitcoinSagas() {
  yield [watchGetExchangeRates(), watchBitcoinStatsRates(), watchGetBitcoinAddresses()]
}
