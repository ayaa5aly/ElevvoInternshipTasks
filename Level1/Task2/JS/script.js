const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateForm(form)) return;

  alert("Message Successfully sent");
  form.reset(); // Reset form after submit if valid
});

const validateForm = (form) => {
  let valid = true;

  let name = form.querySelector(".name");
  let email = form.querySelector(".email");
  let subject = form.querySelector(".subject");
  let message = form.querySelector(".message");

  if (name.value.trim() === "") {
    giveError(name, "Please enter your name");
    valid = false;
  }
  if (subject.value.trim() === "") {
    giveError(subject, "Please enter your subject");
    valid = false;
  }
  if (message.value.trim() === "") {
    giveError(message, "Please enter your message");
    valid = false;
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = email.value.trim();
  if (!emailRegex.test(emailValue)) {
    giveError(email, "Please enter a valid email");
    valid = false; // Important: mark as invalid if email is wrong!
  }

  return valid; // Return final validation state
};

const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");

  let existingError = parentElement.querySelector(".err-msg");
  if (existingError) {
    existingError.remove();
  }

  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("err-msg");
  parentElement.appendChild(error);
};

const inputs = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");
let allFields = [...inputs, ...textarea];

allFields.forEach((field) => {
  field.addEventListener("input", () => {
    removeError(field);
  });
});

const removeError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");
  let error = parentElement.querySelector(".err-msg");
  if (error) {
    error.remove(); // Use () to actually call remove!
  }
};
