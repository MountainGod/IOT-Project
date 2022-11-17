const isTest = true;

if (isTest){
	for (let anchor of document.getElementsByTagName("a")) {
		anchor.href = anchor.href + window.location.search;
	}
}
