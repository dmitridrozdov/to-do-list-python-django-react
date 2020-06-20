/** @jsx React.DOM */
var MyComponent = React.createClass({
  render: function () {
    return (
      <p ref="p">{this.props.children}</p>
    );
  }
});