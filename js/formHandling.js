(function () {
    emailjs.init("_t8k_EMLBEpNYyfsg");
})();

const openButton = document.getElementById("open-button");
const contactForm = document.getElementById("contact-form");
const generalError = document.getElementById("general-error");
const formBtn = document.getElementById("form-btn");

const nameInput = contactForm.name;
const emailInput = contactForm.email;
const messageInput = contactForm.message;

/* -----------------------------
   UI STATES
------------------------------ */

function validateForm() {
    nameInput.classList.add("border-red-500");
    emailInput.classList.add("border-red-500");
    messageInput.classList.add("border-red-500");

    generalError.textContent = "Please fill out all fields.";

    formBtn.disabled = true;
    formBtn.classList.remove("bg-blue-500", "bg-green-500");
    formBtn.classList.add("bg-red-500", "cursor-not-allowed", "hover:bg-gray-500");

    setTimeout(clearValidation, 2000);
}

function sendingState() {
    formBtn.textContent = "Sending...";
    formBtn.disabled = true;

    formBtn.classList.remove("bg-blue-500", "bg-red-500");
    formBtn.classList.add("bg-green-500", "cursor-not-allowed", "hover:bg-green-700");
}

function successState() {
    formBtn.textContent = "Message Sent ✅";

    setTimeout(() => {
        contactForm.reset();
        clearValidation();
    }, 2000);
}

function clearValidation() {
    nameInput.classList.remove("border-red-500");
    emailInput.classList.remove("border-red-500");
    messageInput.classList.remove("border-red-500");

    generalError.textContent = "";

    formBtn.disabled = false;
    formBtn.textContent = "Send Message";

    formBtn.classList.remove(
        "bg-red-500",
        "bg-green-500",
        "bg-gray-500",
        "hover:bg-gray-500",
        "hover:bg-green-700",
        "cursor-not-allowed"
    );
    formBtn.classList.add("bg-blue-500");
}

/* -----------------------------
   TOGGLE CONTACT FORM
------------------------------ */

openButton.addEventListener("click", () => {
    if (contactForm.classList.contains("hidden")) {
        contactForm.classList.remove("hidden");
        contactForm.classList.add("flex");
    } else {
        contactForm.classList.remove("flex");
        contactForm.classList.add("hidden");
    }
});

/* -----------------------------
   FORM SUBMISSION
------------------------------ */

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
    };

    // ✅ VALIDATION
    if (!formData.name || !formData.email || !formData.message) {
        validateForm();
        return;
    }

    // ✅ BUTTON TURNS GREEN IMMEDIATELY
    sendingState();

    // ✅ SEND EMAIL IN BACKGROUND
    emailjs
        .sendForm(
            "service_bt5syud",
            "template_2l44hwu",
            contactForm
        )
        .then(() => {
            console.log("Email sent successfully!");
            successState();
        })
        .catch((error) => {
            console.error("Failed to send email:", error);

            generalError.textContent = "Something went wrong. Try again.";

            formBtn.classList.remove("bg-green-500");
            formBtn.classList.add("bg-red-500");

            setTimeout(clearValidation, 2000);
        });
});