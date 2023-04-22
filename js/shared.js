const isTest = true;

function keepLinkParams() {
	for (let anchor of document.getElementsByTagName("a")) {
		anchor.href = anchor.href + window.location.search;
	}
	for (let form of document.getElementsByTagName("form")) {
		form.action = form.action + window.location.search;
	}
}

if (isTest) {
	keepLinkParams();
}
