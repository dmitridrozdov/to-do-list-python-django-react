/** @jsx React.DOM */
var React = require("../vendor/react/react-with-addons");
var MyComponent = require("../app/component/my-component");
var TestUtils = React.addons.TestUtils;

describe("My Component", function() {

  describe("A feature", function() {

    afterEach(function() {
      if (instance && TestUtils.isCompositeComponent(instance) && instance.isMounted()) {
        React.unmountComponentAtNode(instance.getDOMNode().parent);
      }
    });

    beforeEach(function() {
      instance = TestUtils.renderIntoDocument(<MyComponent>Some text</MyComponent>);
    });

    it("Check Text Assignment", function() {
      expect(instance.refs.p).toBeDefined();
      expect(instance.refs.p.props.children).toBe("Some text");
    });

  });

});