import React from "react";

export default function Preview(props) {
	// console.log(props.eduInfo);
	// const eduInfoElements = props.eduInfo.map((item) => {
	// 	return (
	// 		<div>
	// 			<h3>{item.title}</h3>
	// 			<p>{item.place}</p>
	// 			<p>{item.date}</p>
	// 		</div>
	// 	);
	// });
	return (
		<div className="preview-container">
			<h1>Preview</h1>
			<section className="preview-section">
				<h1>Personal Info</h1>
				<h2>{props.genInfo.name}</h2>
				<p>{props.genInfo.email}</p>
				<p>{props.genInfo.phone}</p>
				{/* <h1>Edu Info</h1>
				{eduInfoElements} */}
			</section>
		</div>
	);
}
