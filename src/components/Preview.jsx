import React from "react";

export default function Preview(props) {
	// console.log(props.eduInfo);
	const genInfoElements = (
		<div>
			<h2>{props.genInfo.name}</h2>
			<p>Email: {props.genInfo.email}</p>
			<p>Phone: {props.genInfo.phone}</p>
		</div>
	);
	const eduInfoElements = props.eduInfo.map((item) => {
		return (
			<div key={item.id}>
				<h3>Course: {item.title}</h3>
				<p>Place: {item.place}</p>
				<p>Date studied: {item.date}</p>
			</div>
		);
	});
	const workInfoElements = props.workInfo.map((item) => {
		return (
			<div
				key={item.id}
				className="work-field"
			>
				<p className="work-position">{item.position}</p>
				<p>{item.company}</p>
				<p>{item.duration}</p>
			</div>
		);
	});
	return (
		<div className="preview-container">
			<div className="preview-section">
				<header className="flex">{props.genInfo.name}</header>
				<div className="email flex"></div>

				<aside className="sideBar">
					<p>Contact</p>
					<p>
						<small>{props.genInfo.phone}</small>
					</p>
					<p>
						<small>{props.genInfo.email}</small>
					</p>
				</aside>
				<section>
					<h3>Work Experience</h3>
					{workInfoElements}
				</section>

				{/* <h1>Personal Info</h1>
				{genInfoElements}

				<h1>Edu Info</h1>
				{eduInfoElements}

				<h1>Work Info</h1>
				{workInfoElements} */}
			</div>
		</div>
	);
}
