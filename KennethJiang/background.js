chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log(location.href);
};