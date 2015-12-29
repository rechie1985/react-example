'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var AddrItem = React.createClass({
  render: function() {
    var addrName = this.props.addrName;
    return (
      <li>{addrName}</li>
    );
  }
});

var AddrList = React.createClass({
  getDefaultProps: function() {
    return {
      title: '地址列表',
      btnText: '增加'
    };
  },
  getInitialState: function() {
    return {
      addrs: ['北京彭欢国际大厦', '北京海淀区软件园', '北京海淀区软件园3号路'],
      newValue: ''
    };
  },
  changeHandler: function(e) {
    var value = e.target.value;
    this.setState({
      newValue: value
    });
  },
  clickHandler: function(e) {
    var addrs = this.state.addrs;
    addrs.push(this.state.newValue);
    // 更新addrs
    this.setState({
      addrs: addrs
    });
    // 清空
    this.setState({
      newValue: ''
    });
  },
	render: function(){
    var children = this.state.addrs.map(function(addrName, index) {
      return (
        <AddrItem key={index} addrName={addrName} />
      );
    });
		return (
			<div>
        <header>{this.props.title}</header>
				<div>
					<input type="text" onChange={this.changeHandler} value={this.state.newValue}/>
					<button onClick={this.clickHandler}>{this.props.btnText}</button>
				</div>
				<ul>
					{children}
				</ul>
			</div>
		);
	}
});
ReactDOM.render(<AddrList />, document.getElementById('content'));
