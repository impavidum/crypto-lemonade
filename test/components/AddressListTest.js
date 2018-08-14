import React from 'react';
import { shallow } from 'enzyme';
import AddressList from 'components/AddressList.js';

describe('<AddressList />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<AddressList />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "addresslist-component"', function () {
      expect(component.hasClass('addresslist-component')).to.equal(true);
    });
  });
});
