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
    console.log('changeHandler');
    // var value = e.target.value;
    var value = this.refs.valInput.value;
    console.log(value);
  },
  clickHandler: function(e) {
    var addrs = this.state.addrs;
    var newValue = this.refs.valInput.value;
    addrs.push(newValue);
    // 更新addrs
    this.setState({
      addrs: addrs
    });
    // 清空输入框
    this.refs.valInput.value = '';
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
					<input type="text" ref="valInput" onChange={this.changeHandler}/>
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
