import React, { useState } from "react";
import './multipleInputs.css'


const MultipleInputs = () => {
	const details = {
		username: "",
		email: "",
		phone: "",
		password: ""
	}

	const [userRegistration, setUserRegistration] = useState(details);
	const [records, setRecords] = useState([]);

	const handleInput = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setUserRegistration({ ...userRegistration, [name]: value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
		setRecords([...records, newRecord]);
		setUserRegistration(details);
	}
	return (
		<>
			<div className="container">
				<form action="" onSubmit={handleSubmit} className="form">
					<div>
						<label htmlFor="username">Full Name</label><br/>
						<input type="text" name="username" id="username" value={userRegistration.username} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="email">Email</label><br/>
						<input type="email" name="email" id="email" value={userRegistration.email} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="phone">Phone</label><br/>
						<input type="text" name="phone" id="phone" value={userRegistration.phone} onChange={handleInput} />
					</div>
					<div>
						<label htmlFor="password">Password</label><br/>
						<input type="text" name="password" id="password" value={userRegistration.password} onChange={handleInput} />
					</div>
					<button type="submit">Submit</button>
				</form>
				<div>
					{records.map((curElement) => {
						return (
							<>
								<div className="showDataStyle">
									<p>{curElement.username}</p>
									<p>{curElement.email}</p>
									<p>{curElement.phone}</p>
									<p>{curElement.password}</p>
								</div>
							</>
						)
					})}
				</div>
			</div>

		</>
	)
}

export default MultipleInputs;