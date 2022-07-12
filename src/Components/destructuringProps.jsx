import React from "react";

// const DestructuringProps = ({title, subTitle, details}) => {
// 	return (
// 		<>
// 		   <div className="container" style={{textAlign: 'center'}}>
// 			     <h4>{title}</h4>
// 				 <p>{subTitle}</p>
// 				 <span>{details}</span>
// 			</div> 
// 		</>
// 	)
// }


const DestructuringProps = (props) => {
	const {title, subTitle, details} = props;
	return (
		<>
		   <div className="container" style={{textAlign: 'center'}}>
			     <h4>{title}</h4>
				 <p>{subTitle}</p>
				 <span>{details}</span>
			</div> 
		</>
	)
}

export default DestructuringProps;