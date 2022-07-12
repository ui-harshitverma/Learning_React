import React, {useEffect, useState} from "react";

const UseEffectHook = () => {
	const [data, setdata] = useState(0);  // destructuring state
	useEffect(()=>{
		document.title = `chat(${data})`;
		console.log("data updated")
	}, [data])

	const mystyle = {
		backgroundColor: "pink",
		margin: "30px auto", 
		padding: "40px 0",
		width: "600px",
		textAlign: "center"
	}
    const dataFun = () => {
		setdata(data+1);
	}
	return (
		<>
			<div style={mystyle}>
				<h2>{data}</h2>
				<button style={{ fontSize: "18px", padding: "10px 20px" }} onClick={()=> dataFun()}>Button</button>
			</div>
		</>
	)
}
export default UseEffectHook;