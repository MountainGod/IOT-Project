function sendMessage() {
    window.location.href = "mailto:support@HarelMed.imaginary?subject="
        + document.getElementById("email").value
        + " sent\:&?body=" + document.getElementById("message").value;
}
