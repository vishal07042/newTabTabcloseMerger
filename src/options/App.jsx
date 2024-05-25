

export function App() {
  let arrofWebsite = [
		"takeuforward",
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

  return (
		<div>
			<form id='form'>
				<h1>
					select the website which you want to use like chat gpt or
					gfg
				</h1>
			</form>

			<h3>specify the website if more</h3>

			<form action=''>
        {arrofWebsite.map((value, index, array) => {
          return (
				<>

        <select name="" id=""></select>
					<input type='radio' id={value} value={value} />{" "}
          <span>{value}</span>
				</>
			);
        })}
        
				<textarea
					placeholder=' one per line https://neetcode.io/    window.hostname '
					id=''
					cols='30'
					rows='10'
				></textarea>

        <button type="submit">submit</button>
			</form>
		</div>
  );
}
