var reducer = require('../../src/reducers/ExchangeRates');

describe('ExchangeRates', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
