import React, { Component } from "react";
import "./Marker.css";

class Marker extends Component {
	render() {
		let segmentClasses = "Marker";
		if(this.props.selected) {
			segmentClasses += " Selected";
		}
		return (
			<div className={segmentClasses}>
				{this.props.text}€
			</div>

		);
	}

}

export default Marker;