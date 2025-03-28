document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("membershipForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for validation

    let isValid = true;

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const membershipType = document.getElementById("membershipType").value;

    // Validation logic
    if (fullName === "") {
      showError("fullNameError", "Full Name is required.");
      isValid = false;
    } else {
      clearError("fullNameError");
    }

    if (!validateEmail(email)) {
      showError("emailError", "Enter a valid email address.");
      isValid = false;
    } else {
      clearError("emailError");
    }

    if (!validatePhone(phone)) {
      showError("phoneError", "Enter a valid phone number (digits only).");
      isValid = false;
    } else {
      clearError("phoneError");
    }

    if (membershipType === "") {
      showError("membershipError", "Please select a membership type.");
      isValid = false;
    } else {
      clearError("membershipError");
    }

    // If all fields are valid, submit the form (simulate submission)
    if (isValid) {
      alert("Membership Form Submitted Successfully!");
      form.reset();
    }
  });

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to validate phone number (digits only)
  function validatePhone(phone) {
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phone);
  }

  // Function to show error messages
  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.color = "red";
  }

  // Function to clear error messages
  function clearError(elementId) {
    document.getElementById(elementId).innerText = "";
  }
});
