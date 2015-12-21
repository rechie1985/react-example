var React = require('react');

var Header = React.createClass({
  render: function() {
      return (
        <div>
          <span>{this.props.title}</span>
        </div>
      );
  }
});

module.exports = Header;
