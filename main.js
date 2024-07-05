let firstNum;
let secondNum;
let display = document.querySelector(".display");

// define mathematical functions
const addition = function (firstNum, secondNum) {
  return firstNum + secondNum;
};
const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};
const multiply = function (firstNum, secondNum) {
  return firstNum * secondNum;
};
const divide = function (firstNum, secondNum) {
  return firstNum / secondNum;
};

const clearScreen = function () {
  display.textContent = "";
};

const acClear = function () {
  display.textContent = 0;
  firstNum = 0;
  secondNum = 0;
};

// add number button event listeners
numberButtons = document.querySelectorAll(".num");
for (let button of numberButtons) {
  button.addEventListener("click", function () {
    if (display.textContent == 0) {
      clearScreen();
    }
    let digit = button.textContent;
    display.textContent += digit;
  });
}

// add other button event listeners
let acButton = document.querySelector(".clear");
acButton.addEventListener("click", acClear);

let addButton = document.querySelector(".add")
let divideButton = document.querySelector(".divide")
let multiplyButton = document.querySelector(".multiply")
let subtractButton = document.querySelector(".subtract")

const operators = [addButton, divideButton, multiplyButton, subtractButton]
for(let op of operators){
    op.addEventListener("click", function(){
        firstNum = parseInt(display.textContent)
        console.log(firstNum)
    })
}