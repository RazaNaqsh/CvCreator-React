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

	return (
		<div className="App">
			<div className="form-container">
				<h1>Cv Maker</h1>
				<section className="form-section">
					<h2>Enter Your details</h2>
					<div className="form-field-container">{generalInputElements}</div>

					<h2>Enter your Educational Details</h2>
					{/* {eduExpElements} */}
					{/* <button onClick={newField}>Add</button> */}
				</section>
			</div>

			<Preview genInfo={generalInfo} />
		</div>
	);
}

export default App;
