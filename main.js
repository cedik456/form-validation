const form = document.getElementById("validationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submit event triggered");
  validateInput();
});

function validateInput() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let isValid = true;

  console.log("validateInput function called");

  //Name Validation
  if (nameValue === "") {
    setError(nameInput, "Name cannot be empty");
    isValid = false;
  } else if (!isFullName(nameValue)) {
    setError(nameInput, "Name should be your full name");
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  //Email Validation

  if (emailValue === "") {
    setError(emailInput, "Email cannot be empty");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Email is not valid");
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  // Password Validation

  if (passwordValue === "") {
    setError(passwordInput, "Password cannot be empty");
    isValid = false;
  } else if (passwordValue.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    setSuccess(passwordInput);
  }

  if (isValid) {
    console.log("Form submitted successfully");
    console.log(`Name:`, nameValue);
    console.log(`Email:`, emailValue);
    console.log(`Password:`, passwordValue);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
  input.classList.add("error");
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.style.visibility = "hidden";
  input.classList.remove("error");
}

function isValidEmail(email) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

function isFullName(name) {
  const nameParts = name.split(" ");
  return nameParts.length >= 2;
}
