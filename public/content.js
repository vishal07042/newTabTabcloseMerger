console.log(" hello from content.js");



// Listen for messages from the background script
chrome.runtime.onMessage.addListener(async function (
	request,
	sender,
	sendResponse
) {

	console.log(request	)

	



	if (request.message) {
		console.log("Total problems solved: " + request.message);
		console.log("Starting point is set to: " + request.message2);
		

		let totalSolved = request.message;

		let startingPoint = await request.message2;


		let selectedWebsites = await request.message3;

		// selectedWebsites.map((website) => {
		// 	console.log("website is ", website);
		// });
		

		// if (
		// 	totalSolved < startingPoint + 1 &&
		// 	location.hostname != "leetcode.com" &&
		// 	location.hostname != "chatgpt.com" &&
		// 	location.hostname != "www.codehelp.in" &&
		// 	location.hostname != "learn.codehelp.in" &&
		// 	// location.hostname != "www.google.com" &&
		// 	location.hostname != "takeuforward.org" &&
		// 	location.hostname != "www.geeksforgeeks.org"
		// ) {
		// 	sendResponse({ message: "close tab" });
		// 	console.log("closing tab msg send");
		// }

		function isAllowedHostname(hostname) {
			return selectedWebsites.some((domain) => {
				return hostname === domain || hostname.endsWith("." + domain);
			});
		}

		// Main logic
		if (
			totalSolved < startingPoint + 1 &&
			!isAllowedHostname(location.hostname)
		) {
			sendResponse({ message: "close tab" });
			console.log("closing tab msg send");
		}





		console.log("hui exexute");
	}
});
