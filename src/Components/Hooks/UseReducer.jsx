import React, { useReducer } from 'react'

const initalState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initalState
	}
}
const UseReducer = () => {
	const [count, dispatch] = useReducer(reducer, initalState)
	return (
		<>
			<h4>count : {count}</h4>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>
		</>
	)
}

export default UseReducer
