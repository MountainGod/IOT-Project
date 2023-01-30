import {isLoggedIn, getUserEmail} from "./auth";

function sendMessage() {
	window.open("mailto:support@HarelMed.imaginary?subject="
	            + document.getElementById("emailInput").value
	            + " sent\:&?body=" + document.getElementById("emailContent").value, "_blank").focus();
}

function showForm(formWrapperID) {
	let form           = document.getElementById(formWrapperID);
	form.style.display = "block";
}

function hideAllForms() {
	let wrapperIDs = ["emailFormWrapper", "SMSFormWrapper", "faxFormWrapper"];
	for (let wrapper of wrapperIDs) {
		document.getElementById(wrapper).style.display = "none";
	}
}

document.getElementById("emailRadio").addEventListener("click", () => {
	hideAllForms();
	showForm("emailFormWrapper");
});
document.getElementById("SMSRadio").addEventListener("click", () => {
	hideAllForms();
	showForm("SMSFormWrapper");
});
document.getElementById("faxRadio").addEventListener("click", () => {
	hideAllForms();
	showForm("faxFormWrapper");
});

document.getElementById("sendEmailBtn").addEventListener("click", sendMessage);
document.getElementById("sendFaxBtn").addEventListener("click", sendMessage);
document.getElementById("sendSMSBtn").addEventListener("click", sendMessage);

hideAllForms();
showForm("emailFormWrapper");

if (isLoggedIn()) {
	document.getElementById("emailInput").value = getUserEmail();
}