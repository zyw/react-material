import React from "react";
import Slider from "react-slick";

export default class Home2 extends React.Component {
	render(){
		var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows:false,
	      variableWidth:false
	    };
	    return (
	      <Slider {...settings}>
	        <img src="../images/1.jpeg"/>
			<img src="../images/2.jpeg"/>
			<img src="../images/3.jpeg"/>
			<img src="../images/4.jpeg"/>
			<img src="../images/5.jpeg"/>
			<img src="../images/6.jpeg"/>
	      </Slider>
	    );
	}
}