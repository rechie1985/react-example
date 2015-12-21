'use strict'
var React = require('react');

var AddrList = React.createClass({
	render: function(){
		return(
			<ul class="editlist">
				<li>                    
					<a>北京鹏寰国际大大厦<br/>李树亮 18618174215 </a>                
				</li>
				<li>                    
					<a>北京北京市海淀区软件园三号路1号楼<br/>李亮 18618175435</a>
				</li>
				<li>   
					<a>北京撒旦法阿斯顿f阿斯顿ffhjxjhjdhhr<br/>rechie 18618179683</a>
				</li>
			</ul>
		);
	}
});
React.render(<AddrList />, document.getElementById('content'))
