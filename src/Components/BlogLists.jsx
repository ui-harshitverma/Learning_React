import React from "react";

const BlogLists = ({ heading , para, fun }) => {
	return (
		<>
			<div className="blog_container">
				<div className="blog_items">
					<h4>Blog Heading</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, perspiciatis!</p>
					<button onClick={fun}>Remove</button>
				</div>
			</div>
		</>
	)
}

export default BlogLists;