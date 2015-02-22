require('node-jsx').install({ extension: '.jsx' });

var React = require('react');
var App = require('./scripts/app.jsx');

var Html = React.createClass({

  render: function() {

    return (
        <html>
        <head>
          <meta charSet="utf-8"/>
          <meta name="description" content="react isomorphic template"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>React Isomorphic Template</title>
          <link rel="stylesheet" href="public/css/main.css"/>
        </head>
        <body>
          <div id="app"><App/></div>
          <script src="public/js/main.js"></script>
        </body>
        </html>
    );
  }
});

module.exports = Html;