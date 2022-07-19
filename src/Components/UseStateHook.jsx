import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseStateHook = () => {
	const [state, setState] = useState("Verma");
	const [count, setCount] = useState(0);
	const changeState = () => {
		let value = state;
		value === "verma" ? setState("Harshit") : setState("verma");
	}
	useEffect(() => {
		setTimeout(() => {
			console.log("you have clicked");
		}, 2000)
	}, [count]);

	const changeCounterValue1 = () => setCount(count + 1);
	const changeCounterValue2 = () => setCount(count - 1);

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				<h3>{state}</h3>
				<button className='btn' onClick={changeState}>Click to change</button>
				<h3>{count}</h3>
				<button onClick={changeCounterValue1}>Click to decrease the value</button>
				<button onClick={() => (setCount(0))}>click to refresh</button>
				<button onClick={changeCounterValue2}>Click to increase the value</button>
			</div>
		</>
	)
}
export default UseStateHook;
