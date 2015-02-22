var React = require('react');

var App = React.createClass({

  testClientScript: function() {
    alert('component has mounted on client side!');
  },

  render: function() {
    return (
      <button onClick={this.testClientScript}>Test Client Script</button>
    );
  }
});

module.exports = App;