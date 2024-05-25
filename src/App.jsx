export function App() {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			<h1>pop up</h1>
			<form
				id='form'
				onSubmit={(e) => {
					e.preventDefault();
					let startingValueadd = e.target.selectQuestion.value;
					let username = e.target.username.value;
					chrome.runtime.sendMessage(
						{
							startingValueadd: startingValueadd,
							username: username,
						},
						function () {
							console.log("message sent");
						}
					);
				}}
			>
				<h1>
					{" "}
					<label for='questions'>your leetcode username</label>
				</h1>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='provish'
				/>
				<h1>
					{" "}
					<label for='questions'>
						select no. of que you wanna to everday
					</label>
				</h1>
				<select
					name='questions'
					id='selectQuestion'
					type='number'
					required
				>
					{arr.map((i) => (
						<option
							className='font-bold bg-black text-green-500 '
							key={i}
							value={i}
						>
							<p>{i}</p>
						</option>
					))}
				</select>
				<br />
				<br />
				<button type='submit'>submit</button>
			</form>
		</>
	);
}
