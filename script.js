const myButton = document.querySelector("#submitButton");
const emailInput = document.querySelector("#mailValue");
const errorMessage = document.querySelector("#textError");
const iconError = document.querySelector("#iconError");
myButton.addEventListener("click", () => {
  emailValidation();
});

// function emailValidation() {
//   const emailRegex = !/\S+@\S+.\S+/.test(email);
//   if (emailInput.value.match(emailRegex)) {
//     errorMessage.innerHTML = `The mail is sent with success`;
//     errorMessage.style.color = "green";
//     iconError.classList.remove("show");
//     iconError.src = ""; // Clear src when hidden
//     emailInput.style.border = "1px solid var(--desaturatedRed)";
//     console.log("Valid email, icon hidden");
//   } else {
//     errorMessage.innerHTML = `Please provide a valid email`;
//     errorMessage.style.color = "var(--softRed)";
//     iconError.src = "images/icon-error.svg";
//     iconError.classList.add("show");
//     emailInput.style.border = "2px solid var(--softRed)";
//     console.log("Invalid email, icon should be visible", {
//       hasShowClass: iconError.classList.contains("show"),
//       src: iconError.src,
//       display: window.getComputedStyle(iconError).display,
//     });
//   }
// }

function emailValidation() {
  const email = emailInput.value.trim();

  if (email === "") {
    errorMessage.innerHTML = `Please provide a valid email`;
    errorMessage.style.color = "var(--softRed)";
    iconError.src = "images/icon-error.svg";
    iconError.classList.add("show");
    emailInput.style.border = "2px solid var(--softRed)";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorMessage.innerHTML = `Please provide a valid email`;
    errorMessage.style.color = "var(--softRed)";
    iconError.src = "images/icon-error.svg";
    iconError.classList.add("show");
    emailInput.style.border = "2px solid var(--softRed)";
  } else {
    errorMessage.innerHTML = `The mail is sent with success`;
    errorMessage.style.color = "green";
    iconError.classList.remove("show");
    iconError.src = ""; // Clear src when hidden
    emailInput.style.border = "1px solid var(--desaturatedRed)";
    // emailInput.value = "";
  }
}
