var React = require('react');
var AddrItem = require('./AddrItem.react');


var AddrList = React.createClass({
  render: function(){
    var addrList = this.props.addrs;
    var addrs = [];

    for (var key in addrList) {
      addrs.push(<AddrItem key={key} addr={addrList[key]} />);
    }

    return (
      <ul className="editlist">
        {addrs}
      </ul>
    );
  }
});

module.exports = AddrList;
