import React from 'react';
import { Slider } from 'amazeui-react';

class Home extends React.Component {
	onSelect(index, direction) {
	  console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
	}
	render(){
		return (
				<Slider onSelect={this.onSelect} theme={'a2'}>
				    <Slider.Item>
				      	<img src="../images/1.jpeg"/>
				    </Slider.Item>
				    <Slider.Item>
				    	<img src="../images/2.jpeg"/>
				    </Slider.Item>
				    <Slider.Item>
				      	<img src="../images/3.jpeg"/>
				    </Slider.Item>
				    <Slider.Item>
				      	<img src="../images/4.jpeg"/>
				    </Slider.Item>
				    <Slider.Item>
				      	<img src="../images/5.jpeg"/>
				    </Slider.Item>
				    <Slider.Item>
				      	<img src="../images/6.jpeg"/>
				    </Slider.Item>
			  </Slider>
			);
	}
}

export default Home;