import React from "react";

const ConditionalItems = (props) => {
	let x = props.x;
	let y = props.y;
	let z = props.z;

	if (x===y && y===z && z===x){
		return (
			<>
			   <div>
					<p>{x} {y} {z}</p>
					<h4>Matching</h4>
			   </div> 
			</>
		)
	}else{
		return (
			<>
			   <div>
					<p>{x} {y} {z}</p>
					<h4>Not Matching</h4>
			   </div> 
			</>
		)
	}

	
}


export default ConditionalItems;