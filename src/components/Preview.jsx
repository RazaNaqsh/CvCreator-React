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
			<div
				key={item.id}
				className="edu-field"
			>
				<p className="edu-course">{item.title}</p>
				<p>{item.place}</p>
				<p>{item.date}</p>
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
				<span className="work-company">{item.company}</span> |{" "}
				<span>{item.duration}</span>
			</div>
		);
	});
	return (
		<div className="preview-container">
			<div className="preview-section">
				<header className="flex">{props.genInfo.name}</header>
				<div className="currentPosition flex">{props.workInfo[0].position}</div>

				<aside className="sideBar">
					<div className="contact-field">
						<h5 className="contact-heading">Contact</h5>
						<p>{props.genInfo.phone}</p>
						<p>{props.genInfo.email}</p>
					</div>
					<div className="edu-info">
						<h5 className="contact-heading">Education Info</h5>
						{eduInfoElements}
					</div>
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
