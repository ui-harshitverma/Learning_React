import React from "react";

export class NameWrapper extends React.Component {
	state = { 
	   name: 'Harshit Verma' 
	};
	render() {
	  return this.props.render(this.state.name);
	}
  }
export const Name = () => (
	<NameWrapper render={name => <h2>Hi, {name}</h2>} />
  );