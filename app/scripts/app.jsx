var React = require('react');

var App = React.createClass({

  testClientScript: function() {
    alert('events are triggered by client scripts...');
  },

  render: function() {
    return (
      <div onClick={this.testClientScript}>Hello World!</div>
    );
  }
});

module.exports = App;