const display = document.querySelector("#display");
let resetDisplay = false;
display.textContent = "0";
const digits = document.querySelectorAll(".digit");
digits.forEach((e) =>
  e.addEventListener("click", (e) => {
    if (e.target.textContent != "." || !display.textContent.includes(".")) {
      if (
        (display.textContent === "0" && e.target.textContent != ".") ||
        resetDisplay
      ) {
        display.textContent = e.target.textContent;
        resetDisplay = false;
      } else {
        display.textContent += e.target.textContent;
      }
    }
  })
);

document
  .querySelector("#clear")
  .addEventListener("click", () => (display.textContent = "0"));

document.querySelectorAll(".operator").forEach((e) =>
  e.addEventListener("click", () => {
    resetDisplay = true;
  })
);

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b == 0) {
    return "ERR #DIV0";
  } else {
    return a / b;
  }
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
