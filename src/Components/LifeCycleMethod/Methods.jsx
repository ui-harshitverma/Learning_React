import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Methods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		}
		console.log("this will fire first");
	}
	// componentWillMount() {
	// }
	componentDidMount() {
		console.log("this will fire second");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("this will fire when component updates");
		console.log(prevProps);  // it
		console.log(prevState); // it will return the prev. State
	}
	// componentWillReceiveProps(nextProps) {
	// }
	// shouldComponentUpdate(nextProps, nextState) {
	// }
	// componentWillUpdate(nextProps, nextState) {
	// }
	// componentWillUnmount() {
	// }
	countUp() {
		this.setState({ counter: this.state.counter + 1 });
	}

	render() {
		return (
			<>
				<div>
					<h1>LifeCycle Methods</h1>
					<button onClick={() => this.countUp()}>{this.state.counter}</button>
				</div>
			</>
		);
	}
}

// Methods.propTypes = {

// };

export default Methods;