const WorkInfo = (props) => {
	// TODO Needa make input fields reusable, will think on this!

	const workElements = props.state.map((field) => {
		return (
			<div
				key={field.id}
				className="form-field-container"
			>
				<label>
					Company Name
					<input
						type="text"
						onChange={() => props.handleWorkChange(event, field.id)}
						name="company"
						value={field.company}
					/>
				</label>
				<label>
					Position
					<input
						type="text"
						onChange={() => props.handleWorkChange(event, field.id)}
						name="position"
						value={field.position}
					/>
				</label>
				<label>
					Duration
					<input
						type="text"
						onChange={() => props.handleWorkChange(event, field.id)}
						name="duration"
						value={field.duration}
					/>
				</label>
				{props.state.length > 1 && (
					<button onClick={() => props.deleteWorkField(field.id)}>
						Delete
					</button>
				)}
			</div>
		);
	});
	return workElements;
};

export default WorkInfo;
