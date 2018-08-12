import React from 'react';
import { shallow } from 'enzyme';
import Nav from 'components/Nav.js';

describe('<Nav />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Nav />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "nav-component"', function () {
      expect(component.hasClass('nav-component')).to.equal(true);
    });
  });
});
