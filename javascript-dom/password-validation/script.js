const passwordInputElement = document.querySelector(
  ".pasword-validation-popup-wrapper input"
);
const passwordValidationErrorParagraphElements = document.querySelectorAll(
  ".password-validation-popup p"
);

passwordInputElement.addEventListener("keyup", (e) => {
  const errorObject = validatePassword(e.target.value);
  passwordValidationErrorParagraphElements[0].className =
    errorObject.hasLowerCaseCharacter ? "succes" : "";
  passwordValidationErrorParagraphElements[1].className =
    errorObject.hasCapitalLetter ? "succes" : "";
  passwordValidationErrorParagraphElements[2].className =
    errorObject.hasSpecialCharacter ? "succes" : "";
  passwordValidationErrorParagraphElements[3].className =
    errorObject.hasNumberCharacter ? "succes" : "";
  passwordValidationErrorParagraphElements[4].className =
    errorObject.hasEightCharacter ? "succes" : "";
});

function validatePassword(password) {
  return {
    hasEightCharacter: password.length >= 8,
    hasCapitalLetter: /[A-Z]/.test(password),
    hasSpecialCharacter: /[!#$%&?"']/.test(password),
    hasNumberCharacter: /[0-9]/.test(password),
    hasLowerCaseCharacter: /[a-z]/.test(password),
  };
}
