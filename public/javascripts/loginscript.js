
// labels Animation
const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

let userInput = document.querySelector("[name='username']");
let passwordInput = document.querySelector("[name='password']");
// Form Validation
document.forms[0].onsubmit = function (e) {
  let usernameValid = false;
  let passwordValid = false;
  if (userInput.value.length == 14 && userInput.value !== "") {
    console.log("valid")
    usernameValid = true;
  }
  if (passwordInput.value.length == 14 && passwordInput.value !== "") {
    console.log("valid")

    passwordValid = true;
  }
  if (usernameValid === false || passwordValid === false) {
    e.preventDefault();
  }
};

