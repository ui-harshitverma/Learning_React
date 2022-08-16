import React from "react";
import Subjects from "./HOC";

class Sushant extends React.Component {
	state={
		marks : 0
	}
	marksIncremented2 = () => {
		this.setState({
			marks : this.state.marks + 1
		})
	}
	render() {
		return (
				<h2 onMouseOver={this.marksIncremented2}> Sushant mark's {this.state.marks}, {this.props.hocsub}</h2>
		)
	}
}


export default Subjects(Sushant);