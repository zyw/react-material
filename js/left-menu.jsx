import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class LeftMenu extends React.Component {
	render() {
		return (
			<div>
				<LeftNav
					docked={false}
					width={200}
					open={this.props.isopen}
					onRequestChange={ open => this.props.requestChange(open) }
					>
					<MenuItem onTouchTap={this.props.handleClose}>菜单 1</MenuItem>
					<MenuItem onTouchTap={this.props.handleClose}>菜单 2</MenuItem>
				</LeftNav>
			</div>
		);
	}
}