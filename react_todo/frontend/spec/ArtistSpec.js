'use strict';

import React from 'react/addons';
import Artist from '../src/Artist';

var TestUtils = React.addons.TestUtils;

describe("Artist", () => {
    var component;
    beforeEach(() => {
      component = TestUtils.renderIntoDocument(<Artist name="Alehandro"/>);
    });

    it('should display the correct artist name', () => {
        expect(component.getDOMNode().textContent).toMatch(/Artist name: Alex/)
    });
})