import React from 'react';
import { shallow } from 'enzyme';
import ExchangeRates from 'components/ExchangeRates.js';

describe('<ExchangeRates />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ExchangeRates />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "exchangerates-component"', function () {
      expect(component.hasClass('exchangerates-component')).to.equal(true);
    });
  });
});
