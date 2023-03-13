const EduInfo = (props) => {
	const eduElements = props.state.map((item) => (
		<div
			key={item.id}
			className="form-field-container"
		>
			<label>
				Title of Study
				<input
					type="text"
					onChange={() => props.handleEduChange(event, item.id)}
					name="title"
					value={item.title}
				/>
			</label>
			<label>
				Place of Study
				<input
					type="text"
					onChange={() => props.handleEduChange(event, item.id)}
					name="place"
					value={item.place}
				/>
			</label>
			<label>
				Date
				<input
					type="text"
					onChange={() => props.handleEduChange(event, item.id)}
					name="date"
					value={item.date}
				/>
			</label>
			{props.state.length > 1 && (
				<button onClick={() => props.deleteEduField(item.id)}>Delete</button>
			)}
		</div>
	));
	return eduElements;
};

export default EduInfo;
