import React from 'react';
import { shallow } from 'enzyme';
import Landing from 'components/Landing.js';

describe('<Landing />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Landing />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "landing-component"', function () {
      expect(component.hasClass('landing-component')).to.equal(true);
    });
  });
});
