import React from "react";
import Preview from "./components/Preview";

function App() {
	const [generalInfo, setGeneralInfo] = React.useState({
		name: "",
		email: "",
		phone: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setGeneralInfo((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}
	// console.log(generalInfo);

	const generalInfoArr = ["name", "email", "phone"];
	const generalInputElements = generalInfoArr.map((item) => {
		return (
			<label>
				{item}
				<input
					type="text"
					onChange={handleChange}
					name={item}
					value={generalInfo.item}
				/>
			</label>
		);
	});

	const [eduExpArr, setEduExpArr] = React.useState([
		["title of study", "school name", "date"],
	]);

	const eduExpElements = eduExpArr.map((field) => {
		return (
			<div className="form-field-container">
				<label>
					{field[0]} <input type="text" />
				</label>
				<label>
					{field[1]} <input type="text" />
				</label>
				<label>
					{field[2]} <input type="text" />
				</label>
			</div>
		);
	});

	function newField() {
		setEduExpArr((prevArr) => {
			return [...prevArr, ["title of study", "school name", "date"]];
		});
		console.log(eduExpArr);
	}

	return (
		<div className="App">
			<div className="form-container">
				<h1>Cv Maker</h1>
				<section className="form-section">
					<h2>Enter Your details</h2>
					<div className="form-field-container">{generalInputElements}</div>

					<h2>Enter your Educational Details</h2>
					<button onClick={newField}>Add</button>
					{eduExpElements}
				</section>
			</div>

			<Preview info={generalInfo} />
		</div>
	);
}

export default App;
