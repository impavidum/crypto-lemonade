import React from 'react';
import { shallow } from 'enzyme';
import BitcoinStats from 'components/BitcoinStats.js';

describe('<BitcoinStats />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<BitcoinStats />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "bitcoinstats-component"', function () {
      expect(component.hasClass('bitcoinstats-component')).to.equal(true);
    });
  });
});
