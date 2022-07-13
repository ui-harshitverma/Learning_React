import React, { useState } from 'react'
import BlogLists from './BlogLists';

function PassFunAsProps() {
	const [data, setData] = useState("harshit");
	function ClickToRemoveName() {
		setData(' ');
	}
	return (
		<div>
			<>
			  <h4>{data}</h4>
			  <BlogLists fun={ClickToRemoveName} heading="Blog titile" para="paragraph"/>
			</>
		</div>
	)
}
export default PassFunAsProps;
