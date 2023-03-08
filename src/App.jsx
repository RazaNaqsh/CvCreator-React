import React from "react";
import Preview from "./components/Preview";

function App() {
	const [generalInfo, setGeneralInfo] = React.useState({
		name: "",
		email: "",
		phone: "",
	});

	function handleGeneralInfo(e) {
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
					onChange={handleGeneralInfo}
					name={item}
					value={generalInfo.item}
				/>
			</label>
		);
	});

	const [eduExpInfo, setEduExpInfo] = React.useState([
		{
			id: 0,
			title: "",
			place: "",
			date: "",
		},
	]);

	const [eduExpArr, setEduExpArr] = React.useState([
		["title", "place", "date"],
	]);

	function handleEduInfo(e, index) {
		const { name, value } = e.target;
		setEduExpInfo((prevData) => {
			return prevData.map((info) =>
				info.id === index ? { ...info, [name]: value } : info
			);
		});
		console.log(eduExpInfo);
	}

	const eduExpElements = eduExpArr.map((field, index) => {
		return (
			<div className="form-field-container">
				<label>
					Title of Study
					<input
						type="text"
						onChange={() => handleEduInfo(event, index)}
						name={field[0]}
						value={eduExpArr[index].title}
					/>
				</label>
				<label>
					Place of Study
					<input
						type="text"
						onChange={() => handleEduInfo(event, index)}
						name={field[1]}
						value={eduExpArr[index].place}
					/>
				</label>
				<label>
					Date
					<input
						type="text"
						onChange={() => handleEduInfo(event, index)}
						name={field[2]}
						value={eduExpArr[index].date}
					/>
				</label>
			</div>
		);
	});

	function newField() {
		setEduExpArr((prevArr) => {
			return [...prevArr, ["title", "place", "date"]];
		});
		setEduExpInfo((prevData) => [
			...prevData,
			{ id: eduExpInfo.length, title: "", place: "", date: "" },
		]);
		console.log(eduExpInfo);
	}

	return (
		<div className="App">
			<div className="form-container">
				<h1>Cv Maker</h1>
				<section className="form-section">
					<h2>Enter Your details</h2>
					<div className="form-field-container">{generalInputElements}</div>

					<h2>Enter your Educational Details</h2>
					{eduExpElements}
					<button onClick={newField}>Add</button>
				</section>
			</div>

			<Preview info={generalInfo} />
		</div>
	);
}

export default App;
