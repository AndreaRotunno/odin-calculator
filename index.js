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

document.querySelector("#clear").addEventListener("click", () => {
  display.textContent = "0";
  firstNum = null;
  operation = "";
});

let firstNum;
let operation = "";
document.querySelectorAll(".operator").forEach((e) =>
  e.addEventListener("click", (e) => {
    operation = e.target.id;
    if (firstNum != null && !resetDisplay) {
      display.textContent = doOperation(
        firstNum,
        Number(display.textContent),
        operation
      );
    }
    firstNum = Number(display.textContent);
    resetDisplay = true;
  })
);

document.querySelector("#sign").addEventListener("click", () => {
  display.textContent = String(Number(display.textContent) * -1);
});

document.querySelector("#equals").addEventListener("click", () => {
  if (operation) {
    display.textContent = doOperation(
      firstNum,
      Number(display.textContent),
      operation
    );
    resetDisplay = true;
    firstNum = null;
    operation = null;
  }
});

document.querySelector("#percent").addEventListener("click", () => {
  display.textContent = String(Number(display.textContent) * 0.01);
});

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

function doOperation(a, b, op) {
  return window[op](a, b);
}
