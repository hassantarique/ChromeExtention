chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	let matchPattern = /.*stackoverflow.com\/.*/;
	let destinationDomain = "def.com";

	if (matchPattern.test(tab.url)) {
		let res = tab.url.split("/");
		if ((res) && (res.length > 2)) {
			res[2] = destinationDomain;
			chrome.tabs.create({ url: res.join("/") });
		}
	}
};