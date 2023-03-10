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
			<div key={item.id}>
				<h3>Company name: {item.company}</h3>
				<p>Position worked for: {item.position}</p>
				<p>Duration: {item.duration}</p>
			</div>
		);
	});
	return (
		<div className="preview-container">
			<div className="preview-section">
				<header className="flex">{props.genInfo.name}</header>
				<div className="email flex">{props.genInfo.email}</div>

				<main className="main">
					<aside className="sideBar">
						<h4>Contact</h4>
						<small>{props.genInfo.phone}</small>
					</aside>
					<section></section>
				</main>
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
