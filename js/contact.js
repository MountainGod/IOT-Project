function sendMessage() {
    window.location.href = "mailto:support@HarelMed.imaginary?subject="
        + document.getElementById("email").value
        + " sent\:&?body=" + document.getElementById("message").value;
}

function showForm(formWrapperID) {
    let form = document.getElementById(formWrapperID);
    form.style.display = "block"
}

function hideAllForms() {
    let wrapperIDs = ["emailFormWrapper", "SMSFormWrapper", "faxFormWrapper"];
    for (let wrapper of wrapperIDs) {
        document.getElementById(wrapper).style.display = "none";
    }
}

hideAllForms();
showForm("emailFormWrapper");
