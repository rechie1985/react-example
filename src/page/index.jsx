'use strict'
var React = require('react');
var ReactDom = require('react-dom');

var AddrList = React.createClass({
	getInitialState: function(){
		return {
			title: '我的地址',
		  addrs: [{
				id: 1,
				addrName: '北京彭欢国际大厦',
				name: '李树亮',
				phone: 18612453547
			}, {
				id: 2,
				addrName: '北京海淀区软件园',
				name: '李勇',
				phone: 18627287162
			}, {
				id: 3,
				addrName: '北京海淀区软件园3号路',
				name: 'rechie',
				phone: 18627284262
			}]
		};
	},
	render: function(){
		var title = this.state.title;
		var addrs = this.state.addrs.map(function(addr){
			console.log(addr);
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
	}
});
ReactDom.render(<AddrList />, document.getElementById('content'))
