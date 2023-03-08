import React from "react";
import { nanoid } from "nanoid";

export default function Form() {
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
	console.log(generalInfo);

	const generalInfoArr = ["name", "email", "phone"];
	const generalInputElements = generalInfoArr.map((item) => {
		return (
			<label>
				{item}{" "}
				<input
					type="text"
					onChange={handleChange}
					name={item}
					value={generalInfo.item}
				/>
			</label>
		);
	});

	return (
		<div className="form-container">
			<h1>Cv Maker</h1>
			<section className="form-section">
				<h2>Enter Your details</h2>
				<div className="form-field-container">{generalInputElements}</div>

				<h2>Enter your Educational Details</h2>
				{/* {eduExpElements} */}
			</section>
		</div>
	);
}

// const eduExpArr = ["exp1", "exp2"];
// const eduExpElements = eduExpArr.map((item) => {
// 	return (
// 		<div className="form-field-container">
// 			<label>
// 				Title
// 				<input
// 					type="text"
// 					onChange={handleChange}
// 					name={item}
// 					value={generalInfo.item}
// 				/>
// 			</label>
// 			<label>
// 				School Name
// 				<input
// 					type="text"
// 					onChange={handleChange}
// 					name={item}
// 					value={generalInfo.item}
// 				/>
// 			</label>
// 			<label>
// 				Date
// 				<input
// 					type="text"
// 					onChange={handleChange}
// 					name={item}
// 					value={generalInfo.item}
// 				/>
// 			</label>
// 			{eduExpArr.length > 1 && <button>Delete</button>}
// 		</div>
// 	);
// });
