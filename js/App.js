import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/lib/raised-button';
import { Router, Route, browserHistory,IndexRoute,Link } from 'react-router'

import BlogAppBar from './head.jsx';
import LeftMenu from './left-menu.jsx';
import Home from './Home.jsx';
import Demo from './Demo.jsx';
import About from './About.jsx';

var App = React.createClass({
	getInitialState:function(){
		return {
			open:false
		};
	},
	handleToggle:function(){
		this.setState({open: !this.state.open});
	},
	handleClose:function(){
		this.setState({open:false});
	},
	requestChange:function(isopen){
		this.setState({open:isopen});
	},
	render:function(){
		return (<div>
			<BlogAppBar handleToggle={ this.handleToggle }/>

			<LeftMenu handleClose={ this.handleClose } requestChange={ this.requestChange } isopen={ this.state.open } />
			
			{ this.props.children }

		</div>)
	}
});

injectTapEventPlugin();

render((
		<Router history={ browserHistory }>
			<Route path="/" component={App}>
				<Route path="/home" component={Home}/>
				<Route path="/about" component={About} />
				<Route path="/demo" component={Demo}/>
				<IndexRoute component={Home}/>
			</Route>
		</Router>
	),document.getElementById("container"));