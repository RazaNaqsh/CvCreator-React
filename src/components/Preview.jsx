import React from "react";

export default function Preview(props) {
	return (
		<div className="preview-container">
			<h1>Preview</h1>
			<section className="preview-section">
				<h1>{props.info.name}</h1>
				<p>{props.info.email}</p>
				<p>{props.info.phone}</p>
			</section>
		</div>
	);
}
