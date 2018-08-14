/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {
  GET_EXCHANGE_RATES,
  GET_EXCHANGE_RATES_SUCCESS,
  GET_EXCHANGE_RATES_ERROR,
  GET_BITCOIN_STATS,
  GET_BITCOIN_STATS_SUCCESS,
  GET_BITCOIN_STATS_ERROR,
  GET_BITCOIN_ADDRESSES,
  GET_BITCOIN_ADDRESSES_SUCCESS,
  GET_BITCOIN_ADDRESSES_ERROR,
  ADD_BITCOIN_ADDRESS
} from '../actions/const'

const initialState = {
  loadingExchangeRates: false,
  loadingBitcoinStats: false,
  exchangeRates: [],
  bitcoinStats: {
    values: []
  },
  bitcoinAddresses: [
    'mfpz95gjC8kTUmXZRQG4QnFFrBGxAYfVsU',
    'n35c8DcSQAwXTY9cDtzWmDbitPbHhbKsj2',
    'mqqJ7zBM6uVQGGvXhRDHAsHDozhdXBossE',
    // 'mtZ4n3VgJsDB5MmK6nXjRSggaWHiTfXskB',
    // 'mghhB8VmXfYwHrWT4Dw5dxwtr21HtHsJqW',
    // 'mj7vNnMcnrsGcASAmJDDTnd55U5LsGkHEr',
    // 'myvMAgJdjGGn1wvkx6zYHcvPP7UUWtbAaN',
    // 'n37hA47KWxgqGCMJoDKx4Wqt6dE1zsFxXM',
    // 'mxFDXJqbWf3aS6R53i2tUA7ZcmuCCavPHn',
    // 'modXyjXe1qntoeeGd8AZqPTyvV6RVmSfyB',
    // 'msMpbBtxcsadHJMYKu5AizN3iP5QKpaAmc',
    // 'mpn9c6GmhrNhSvJfAbuAUjj5zBdZiC4VrY',
    // 'miUhn1sHRpc73rMpe2hN4vN37DfyyWjXfN',
    // 'mpHZhYUHT4fByDyGnRBrpVaMfDyrexF7aD',
    // 'n1FuDTNjgUt14zbL69TZSfQuqzHV9zSTVM'
  ],
  bitcoinAddressData: [],
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  console.log(action.type)
  const nextState = Object.assign({}, state)
  switch (action.type) {

    
    /*----------------------------- Exchange Rates -----------------------------*/
    case GET_EXCHANGE_RATES:
      {
        nextState.loadingExchangeRates = true;
        return nextState
      }
    case GET_EXCHANGE_RATES_SUCCESS:
      {
        nextState.loadingExchangeRates = false;
        nextState.exchangeRates = action.payload;
        return nextState
      }

    case GET_EXCHANGE_RATES_ERROR:
      {
        nextState.loadingExchangeRates = false;
        return nextState
      }

      /*----------------------------- Bitcoin Stats -----------------------------*/
    case GET_BITCOIN_STATS:
      {
        nextState.loadingBitcoinStats = true;
        return nextState
      }
    case GET_BITCOIN_STATS_SUCCESS:
      {
        nextState.loadingBitcoinStats = false;
        nextState.bitcoinStats = action.payload;
        return nextState
      }

    case GET_BITCOIN_STATS_ERROR:
      {
        nextState.loadingBitcoinStats = false;
        return nextState
      }


      /*----------------------------- Bitcoin Addresses -----------------------------*/
    case GET_BITCOIN_ADDRESSES:
      {
        nextState.loadingBitcoinAddresses = true;
        return nextState
      }

    case GET_BITCOIN_ADDRESSES_SUCCESS:
      {
        console.log('hit')
        nextState.loadingBitcoinAddresses = false;
        console.log(action.payload)
        nextState.bitcoinAddressData = action.payload;
        return nextState
      }

    case GET_BITCOIN_ADDRESSES_ERROR:
      {
        nextState.loadingBitcoinAddresses = false;
        return nextState
      }

      case ADD_BITCOIN_ADDRESS:
      {
        let newAddressList = state.bitcoinAddresses;
        newAddressList.unshift(action.parameter);
        nextState.bitcoinAddresses = newAddressList;
        return nextState
      }

      /*----------------------------- Default -----------------------------*/
    default:
      {
        /* Return original state if no actions were consumed. */
        return state
      }
  }
}

module.exports = reducer
