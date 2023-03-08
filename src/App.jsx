import { nanoid } from "nanoid";
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
	const generalInputElements = generalInfoArr.map((item, index) => {
		return (
			<label key={index}>
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

	const [eduInfo, setEduInfo] = React.useState([
		{
			id: nanoid(),
			title: "",
		},
	]);
	const eduElements = eduInfo.map((item) => (
		<div
			key={item.id}
			className="form-field-container"
		>
			<label>
				Title
				<input
					type="text"
					onChange={() => handleEduChange(event, item.id)}
					name="title"
					value={item.title}
				/>
			</label>
		</div>
	));

	function handleEduChange(e, id) {
		console.log(id);
		const { name, value } = e.target;
		setEduInfo((prevData) => {
			return prevData.map((item) =>
				item.id === id ? { ...item, [name]: value } : item
			);
		});
		console.log(eduInfo);
	}

	function newField() {
		setEduInfo((prevData) => [...prevData, { id: nanoid(), title: "" }]);
	}
	return (
		<div className="App">
			<div className="form-container">
				<h1>Cv Maker</h1>
				<section className="form-section">
					<h2>Enter Your details</h2>
					<div className="form-field-container">{generalInputElements}</div>

					<h2>Enter your Educational Details</h2>
					{eduElements}
					<button onClick={newField}>Add</button>
				</section>
			</div>

			<Preview genInfo={generalInfo} />
		</div>
	);
}

export default App;
