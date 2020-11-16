console.log("Chrome extension ready to go");

chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse) {
	if (request.txt === "hello") {
		let elements = document.getElementsByTagName('p');

		for (elt of elements) {
			elt.style.backgroundColor = "red";
		};
	};
};
