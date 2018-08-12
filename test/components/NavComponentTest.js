/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import NavComponent from 'components/NavComponent.js';

describe('NavComponent', function () {
  let component;

  beforeEach(function () {
    component = createComponent(NavComponent);
  });

  it('should have its component name as default className', function () {
    expect(component.props.className).to.equal('nav-component');
  });
});
