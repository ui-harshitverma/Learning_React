import React from "react";

const FunctionalComp = () => {
	const popup = () => {
		alert("harshit verma");
	}
	return <>
		<div style={{ display: "flex",
	                  justifyContent: "center",
					  alignItems: "center"  ,
					  minHeight: "60vh" }}>
			<button onClick={popup}>Click to see your name</button>
		</div>

	</>
}

export default FunctionalComp;