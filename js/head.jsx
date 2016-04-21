import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

class BlogAppBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			styles: {
				color: "#FFFFFF"
			}
		};
	}

	rightIconButtonTouchTap(){
		this.props.handleToggle();
	}

	handleNavs(url){
		this.context.router.push(url);
	}

	render(){
		return (
			<AppBar title="V5Blog"
				iconClassNameRight="muidocs-icon-navigation-expand-more"
				onLeftIconButtonTouchTap={this.rightIconButtonTouchTap.bind(this) }
			>
				<ul className="nav-items">
					<li><FlatButton label="Home" style={ this.state.styles } onClick={ this.handleNavs.bind(this,"/home") }/></li>
					<li><FlatButton label="Profile" style={ this.state.styles } onClick={ this.handleNavs.bind(this,"/") }/></li>
					<li><FlatButton label="Demo" style={ this.state.styles } onClick={ this.handleNavs.bind(this,"/demo") }/></li>
					<li><FlatButton label="About" style={ this.state.styles } onClick={ this.handleNavs.bind(this,"/about") }/></li>
				</ul>
			</AppBar>
		);
	}
}

BlogAppBar.contextTypes = {
	router:React.PropTypes.object.isRequired
}

export default BlogAppBar;