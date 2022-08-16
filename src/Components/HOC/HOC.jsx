import React from 'react'

const Subjects = (STUDENT) => {
	class Subject extends React.Component{
		render(){
			return(
				<STUDENT hocsub="JavaScript"></STUDENT>
			)
		}
	}
	return Subject;
}

export default Subjects;
