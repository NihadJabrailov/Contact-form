const contactForm = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const radioError = document.getElementById("radioError");
const messageError = document.getElementById("messageError");
const chackboxError = document.getElementById("chackboxError");
const consent = document.getElementById("consent");       // ✅ düzəldildi: "checkbox" → "consent"

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (firstName.value.trim() == "") {                   // ✅ düzəldildi: fisrtName → firstName.value
        firstNameError.style.display = "block";
    } else {
        firstNameError.style.display = "none";
    }

    if (lastName.value.trim() == "") {                    // ✅ düzəldildi: .value əlavə edildi
        lastNameError.style.display = "block";
    } else {
        lastNameError.style.display = "none";
    }

    if (email.value.trim() == "") {                       // ✅ düzəldildi: .value əlavə edildi
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if (message.value.trim() == "") {                     // ✅ düzəldildi: .value əlavə edildi
        messageError.style.display = "block";
    } else {
        messageError.style.display = "none";
    }

    if (consent.checked == false) {
        chackboxError.style.display = "block";
    } else {
        chackboxError.style.display = "none";
    }

    const selectedRadio = document.querySelector('input[name="queryType"]:checked');
    if (!selectedRadio) {
        radioError.style.display = "block";
    } else {
        radioError.style.display = "none";
    }

});