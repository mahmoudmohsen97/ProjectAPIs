const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
})

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
    usernameValid = true;
  }
  if (passwordInput.value.length == 14 && passwordInput.value !== "") {
    passwordValid = true;
  }
  if (usernameValid === true && passwordValid === true) {
    if(userInput.value !== passwordInput.value){
      e.preventDefault();
      Swal.fire({
        icon: 'error',
        text: "Your username and password doesn't match",
      })
  }else{
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
  }
  
}

  if (usernameValid === false || passwordValid === false) {
    e.preventDefault();
    Swal.fire(
      'Login Using Your ID',
      'Username and Password are Your ID and Must be 14 Number',
      'info'
    )
  }
};

