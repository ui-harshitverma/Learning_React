import React from "react";
import ConditionalItems from "./Conditionalitems";

const ConditionalRender = () => {
	return (
		<>
			<div style={{textAlign : 'center', backgroundColor: "pink", padding: "20px 0"}}>
				<h2>Condition Rendering</h2>
				<ConditionalItems x="A" y="B" z="C"/>
				<ConditionalItems x="B" y="B" z="C"/>
				<ConditionalItems x="C" y="C" z="C"/>
				<ConditionalItems x="A" y="C" z="C"/>
			</div>
		</>
	)
}
export default ConditionalRender;