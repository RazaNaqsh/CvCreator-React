import { nanoid } from "nanoid";
import React from "react";
import EduInfo from "./components/EduInfo";
import PersonalInfo from "./components/PersonalInfo";
import Preview from "./components/Preview";
import WorkInfo from "./components/WorkInfo";

function App() {
	//* general info field

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

	//* Educational field

	const [eduInfo, setEduInfo] = React.useState([
		{
			id: nanoid(),
			title: "",
			place: "",
			date: "",
		},
	]);

	function handleEduChange(e, id) {
		// console.log(id);
		const { name, value } = e.target;
		setEduInfo((prevData) => {
			return prevData.map((item) =>
				item.id === id ? { ...item, [name]: value } : item
			);
		});
		// console.log(eduInfo);
	}

	function newEduField() {
		setEduInfo((prevData) => [
			...prevData,
			{ id: nanoid(), title: "", place: "", date: "" },
		]);
	}

	function deleteEduField(id) {
		// console.log(id);
		setEduInfo((prevData) => {
			return prevData.filter((item) => item.id !== id);
		});
	}

	// * work field

	const [workInfo, setWorkInfo] = React.useState([
		{
			id: nanoid(),
			company: "",
			position: "",
			duration: "",
		},
	]);

	function handleWorkChange(e, id) {
		const { name, value } = e.target;
		setWorkInfo((prevData) => {
			return prevData.map((item) =>
				item.id === id ? { ...item, [name]: value } : item
			);
		});
		// console.log(workInfo);
	}

	function newWorkField() {
		setWorkInfo((prevData) => [
			...prevData,
			{ id: nanoid(), company: "", position: "", duration: "" },
		]);
	}
	function deleteWorkField(id) {
		// console.log(id);
		setWorkInfo((prevData) => {
			return prevData.filter((item) => item.id !== id);
		});
	}

	return (
		<div className="App">
			<div className="form-container">
				<h1>Cv Creator</h1>

				<section className="form-section">
					<h2 className="field-title">Enter Your details</h2>
					<div className="form-field-container">
						<PersonalInfo
							state={generalInfo}
							handleGenInfo={handleGeneralInfo}
						/>
					</div>

					<h2 className="field-title">Enter your Educational Details</h2>
					<EduInfo
						state={eduInfo}
						handleEduChange={handleEduChange}
						deleteEduField={deleteEduField}
					/>
					<button onClick={newEduField}>Add</button>

					<h2 className="field-title">Enter Work Details</h2>
					<WorkInfo
						state={workInfo}
						handleWorkChange={handleWorkChange}
						deleteWorkField={deleteWorkField}
					/>
					<button onClick={newWorkField}>Add</button>
				</section>
			</div>

			<Preview
				genInfo={generalInfo}
				eduInfo={eduInfo}
				workInfo={workInfo}
			/>
		</div>
	);
}

export default App;
