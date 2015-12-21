'use strict'
var React = require('react');
var ReactDom = require('react-dom');
var AddrAction = require('../actions/AddrAction');
var AddrStore = require('../stores/AddrStore');

function getAddrState() {
 return {
	 title: '我的地址',
	 addrs: AddrStore.getAll()
 };
}

var AddrList = React.createClass({
	getInitialState: function(){
		// 获取初始化数据
		return getAddrState();
	},
	render: function(){
		var title = this.state.title;
		var addrs = this.state.addrs.map(function(addr){
			return (
				<li key={addr.id}>
					<a>{addr.addrName}<br/>{addr.name} {addr.phone}</a>
				</li>
			);
		});
		return(
			// 每个组件只能有一个容器，不能多个同级的容器
			<div className="list-wrap">
				<div className="titlebar">
					<a href="javascript:void(0);"></a>
					<span>{title}</span>
				</div>
				<ul className="editlist">
					{addrs}
				</ul>
			</div>
		);
	},
	// 挂载
	// 在初始化渲染执行之后立刻调用一次
	componentDidMount: function() {
		// 获取数据，这里只需要触发对应的action即可
		// 不用像之前去手动添加，如下，如果数据更改较多并且不集中的时候，会比较难查找问题
		// var addrs = AddrAction.loadFromServer();
		// this.setState(addrs);
		AddrAction.loadFromServer();
		// 绑定加载完成后的事件
	  AddrStore.addLoadedListener(this._onLoaded);
	},
	 _onLoaded: function() {
		 this.setState(getAddrState());
	 }
});
ReactDom.render(<AddrList />, document.getElementById('content'))
