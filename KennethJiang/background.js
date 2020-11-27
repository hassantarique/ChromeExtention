chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let pattern = /.*stackoverflow.com\/.*/;

	if (pattern.test(tab.url)) {
		chrome.tabs.create({ url: tab.url });
	}
};