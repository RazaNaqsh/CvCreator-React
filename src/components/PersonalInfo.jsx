const PersonalInfo = (props) => {
	const generalInfoArr = ["name", "email", "phone"];
	const generalInputElements = generalInfoArr.map((item, index) => {
		return (
			<label key={index}>
				{item}
				<input
					type="text"
					onChange={props.handleGenInfo}
					name={item}
					value={props.state.item}
				/>
			</label>
		);
	});
	return generalInputElements;
};

export default PersonalInfo;
