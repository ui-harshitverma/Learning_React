import React from "react";
import Subjects from "./HOC";

export class Vikas extends React.Component{
	state={
		marks : 0
	}
	marksIncremented3 = () => {
		this.setState({
			marks : this.state.marks + 1
		})
	}
	render(){
		return(
			  <h2 onMouseOver={this.marksIncremented3}>Vikas mark's {this.state.marks}, {this.props.hocsub}</h2>
		)
	}
}

