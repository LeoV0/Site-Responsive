const myButton = document.querySelector("#submitButton");
const emailInput = document.querySelector("#mailValue");

myButton.addEventListener("click", () => {
  emailValidation();
});

function emailValidation() {
  if (emailInput.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
    // emailIcon.style.display = "inline";
    // emailIcon.src = "check.svg";
    // emailError.style.display = "none";
    console.log("yes");
  } else {
    // emailIcon.style.display = "inline";
    // emailIcon.src = "error.svg";
    // emailError.style.display = "block";
    console.log("no");
  }
}
