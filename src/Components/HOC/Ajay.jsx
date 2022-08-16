import React from "react";
import Subjects from "./HOC";

export class Ajay extends React.Component {
	state = {
		marks: 0
	}
	marksIncremented1 = () => {
		this.setState({
			marks: this.state.marks + 1
		})
	}
	render() {
		return (
				<h2 onMouseOver={this.marksIncremented1}> Ajay mark's {this.state.marks} , {this.props.hocsub}</h2>
		)
	}
}

