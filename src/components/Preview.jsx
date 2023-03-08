import React from "react";

export default function Preview(props) {
	// console.log(props.eduInfo);
	const genInfoElements = (
		<div>
			<h2>{props.genInfo.name}</h2>
			<p>{props.genInfo.email}</p>
			<p>{props.genInfo.phone}</p>
		</div>
	);
	const eduInfoElements = props.eduInfo.map((item) => {
		return (
			<div key={item.id}>
				<h3>{item.title}</h3>
				<p>{item.place}</p>
				<p>{item.date}</p>
			</div>
		);
	});
	const workInfoElements = props.workInfo.map((item) => {
		return (
			<div key={item.id}>
				<h3>{item.company}</h3>
				<p>{item.position}</p>
				<p>{item.duration}</p>
			</div>
		);
	});
	return (
		<div className="preview-container">
			<h1>Preview</h1>
			<section className="preview-section">
				<h1>Personal Info</h1>
				{genInfoElements}

				<h1>Edu Info</h1>
				{eduInfoElements}

				<h1>Work Info</h1>
				{workInfoElements}
			</section>
		</div>
	);
}
