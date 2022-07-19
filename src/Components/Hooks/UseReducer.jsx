import React, { useReducer } from 'react'

const initialState = 0;
function Reducer(state, action){
	switch (action) {
		case "increase" :
			return state+1;
		case "decrease" :
			return state-1;
		default:
			return state;
	}
}
function UseReducer() {
	const [count, dispatch] = useReducer(Reducer, initialState);
	return (
		<>
		  <div className='container'>
			<h1>{count}</h1>
			<button onClick={()=> dispatch('increase')}>increase</button>
			<button onClick={()=> dispatch('decrease')}>decrease</button>
		  </div>
		</>
	)
}
export default UseReducer;
