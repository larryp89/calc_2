// Get display element
const display = document.querySelector(".display");

// Set initial variables
let firstNum = null;
let secondNum = null;
let operator = null;

// Define calculation functions
const calculations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => (b !== 0 ? a / b : "Error"),
  "*": (a, b) => a * b,
};

// Function to update display
const updateDisplay = (value) => {
  display.textContent = value;
};

// Clear screen function
const clearScreen = () => {
  updateDisplay("");
};

// Reset calculator function
const acClear = () => {
  updateDisplay("0");
  firstNum = null;
  secondNum = null;
  operator = null;
};

const toggle = () => {
  let currentValue = parseFloat(display.textContent);
  let toggledValue = currentValue * -1;
  updateDisplay(toggledValue);
  if (operator === null) {
    firstNum = toggledValue;
  } else {
    secondNum = toggledValue;
  }
};

const percentage = () => {
  let currentValue = parseFloat(display.textContent);
  let percentValue = currentValue/100
  updateDisplay(percentValue)
  if (operator === null) {
    firstNum =percentValue;
  } else {
    secondNum = percentValue;
  }
};

// Perform calculation
const doCalculation = () => {
  if (firstNum !== null && operator) {
    secondNum = parseFloat(display.textContent);
    const operation = calculations[operator];
    const result = operation(firstNum, secondNum);
    updateDisplay(result);
    firstNum = result;
    secondNum = null;
    operator = null;
  }
};

// Handle number input
const handleNumberInput = (digit) => {
  if (display.textContent === "0" || operator === "=") {
    updateDisplay(digit);
  } else {
    updateDisplay(display.textContent + digit);
  }
};

// Handle operator input
const handleOperatorInput = (op) => {
  if (firstNum === null) {
    firstNum = parseFloat(display.textContent);
  } else if (operator) {
    doCalculation();
  }
  operator = op;
  updateDisplay("");
};

// Add event listeners
document.querySelectorAll(".num").forEach((button) => {
  button.addEventListener("click", () => handleNumberInput(button.textContent));
});

document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () =>
    handleOperatorInput(button.textContent)
  );
});

document.querySelector(".equals").addEventListener("click", doCalculation);
document.querySelector(".clear").addEventListener("click", acClear);
document.querySelector(".decimal").addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    updateDisplay(display.textContent + ".");
  }
});
document.querySelector(".toggle").addEventListener("click", toggle);
document.querySelector(".percent").addEventListener("click", percentage);
