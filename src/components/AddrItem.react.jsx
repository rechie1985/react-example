var React = require('react');
var AddrItem = React.createClass({
  render: function() {
    var addr = this.props.addr;
    return (
      <li>
        <a>{addr.addrName}</a>
      </li>
    );
  }
});

module.exports = AddrItem;
