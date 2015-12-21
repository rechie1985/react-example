var React = require('react');
var AddrItem = React.createClass({
  render: function() {
    var addr = this.props.addr;
    return (
      <li key={addr.id}>
        <a>{addr.addrName}<br/>{addr.name} {addr.phone}</a>
      </li>
    );
  }
});

module.exports = AddrItem;
