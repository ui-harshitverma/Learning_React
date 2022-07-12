import React from 'react'
import { useState } from 'react';

const UseStateHook = () => {
	const [state, setState] = useState("Verma");
	const [count, setCount] = useState(0);
	const changeState = () => {
		let value = state;
		value === "verma" ? setState("Harshit") : setState("verma");
	}
	const changeCounterValue = () => setCount(count + 1);
	const refreshValue = () => {
		setCount(0);
	}
	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<h3>{state}</h3>
				<button className='btn' onClick={changeState}>Click to change</button>
				<h3>{count}</h3>
				<button onClick={changeCounterValue}>Click to increase the value</button>
				<button onClick={() => refreshValue()}>click to refresh</button>
			</div>
		</>
	)
}
export default UseStateHook;
