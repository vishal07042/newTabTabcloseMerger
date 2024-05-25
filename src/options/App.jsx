// import { useState } from "react";

// export function App() {
// 	const [selectedWebsites, setSelectedWebsites] = useState([]);

// 	let arrofWebsite = [
// 		"codeforces",
// 		"chatgpt",
// 		"gfg",
// 		"codeStudio",
// 		"codeHelp",
// 		"learnyard",
// 		"bard",
// 		"apna college",
// 		"codingShuttle",
// 		"educosys",
// 	];

// 	return (
// 		<>
// 			<form
// 				id='form'
// 				onSubmit={(e) => {
// 					e.preventDefault();

// 					//  console.log(fnArrary)
// 					console.log(selectedWebsites);
// 				}}
// 			>
// 				<h1>
// 					select the website which you want to use like chat gpt or
// 					gfg
// 				</h1>
// 				{arrofWebsite.map((website) => {
// 					return (
// 						<>
// 							{" "}
// 							<input
// 								type='checkbox'
// 								name={website}
// 								id={website}
// 								className='text-4xl text-black'
// 								onChange={(e) => {
// 									const { value, checked } = e.target;
// 									if (checked) {
// 										setSelectedWebsites((prev) => [
// 											...prev,
// 											value,
// 										]);
// 									} else {
// 										setSelectedWebsites((prev) =>
// 											prev.filter(
// 												(website) => website !== value
// 											)
// 										);
// 									}
// 								}}
// 							/>
// 							<label for={website}>{website}</label>
// 							<br />{" "}
// 						</>
// 					);
// 				})}
// 				<button type='submit'>submit</button>
// 			</form>

// 			<h3>specify the website if more</h3>

// 			<form action=''>
// 				<textarea
// 					placeholder=' one per line https://neetcode.io/    window.hostname '
// 					id=''
// 					cols='30'
// 					rows='10'
// 				></textarea>
// 			</form>
// 		</>
// 	);
// }



import { useState } from "react";

export function App() {
	const [selectedWebsites, setSelectedWebsites] = useState([]);

	const arrofWebsite = [
		"codeforces",
		"chatgpt",
		"gfg",
		"codeStudio",
		"codeHelp",
		"learnyard",
		"bard",
		"apna college",
		"codingShuttle",
		"educosys",
	];

	const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		if (checked) {
			setSelectedWebsites((prev) => [...prev, value]);
		} else {
			setSelectedWebsites((prev) =>
				prev.filter((website) => website !== value)
			);
		}
	};

	return (
		<>
			<form
				id='form'
				onSubmit={(e) => {
					e.preventDefault();
					console.log(selectedWebsites);

          chrome.runtime.sendMessage({selectedWebsites});
          console.log("message sent 1")
				}}
			>
				<h1>
					Select the website which you want to use like ChatGPT or GFG
				</h1>
				{arrofWebsite.map((website) => (
					<div key={website}>
						<input
							type='checkbox'
							name={website}
							id={website}
							value={website}
							className='text-4xl text-black'
							onChange={handleCheckboxChange}
						/>
						<label htmlFor={website}>{website}</label>
						<br />
					</div>
				))}
				<button type='submit'>Submit</button>
			</form>

			<h3>Specify the website if more</h3>

			<form action=''>
				<textarea
					placeholder='One per line https://neetcode.io/    window.hostname'
					cols='30'
					rows='10'
				></textarea>
			</form>
		</>
	);
}
