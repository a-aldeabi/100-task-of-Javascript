// Select the form and the container to display errors
const form = document.querySelector("form");
const ErrorMessage = document.getElementById("Error-Message");

// Function to validate the form on submit
function FormValidation(e) {
  e.preventDefault(); // Prevent the default form submission

  const error = []; // Array to store error messages

  // Get values from input fields
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;

  // Check if first or last name contains numbers
  if (/\d/.test(firstName) || /\d/.test(lastName)) {
    error.push("The name should not contain numbers");
  }

  // Check if email is empty
  if (email.trim() === "") {
    error.push("Email should not be empty");
  }

  // Check if password has at least 6 characters
  if (password.length < 6) {
    error.push("Password should be at least 6 characters");
  }

  // Check if passwords match
  if (password !== repeatPassword) {
    error.push("Passwords do not match");
  }

  if (error.length > 0) {
    ErrorMessage.innerHTML =
      "<ul><li>" + error.join("</li><li>") + "</li></ul>";
  } else {
    ErrorMessage.innerHTML = "Form submitted successfully!";
    ErrorMessage.style.color = "green";
  }
}

form.addEventListener("submit", FormValidation);
