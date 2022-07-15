import React from "react";

const data = [
	{item: "first"},
	{item: "second"},
	{item: "third"},
	{item: 'fourth'}
];

const ListRendering = () => {
	return (
		<>
			<ul className="Container_list" style={{backgroundColor: 'green', color: "white", padding: "20px" , margin: "0 40%"}}>
                  {data.map((items)=> {
					return (
						<> <li className="list_item">{items.item}</li> </>
					)
					})}
			</ul>
		</>
	)
}

export default ListRendering;