let number1;
let operator;
let number2;
let tempNum = "";
let result;

let numButtons = document.querySelectorAll(".num-btn");
let opButtons = document.querySelectorAll(".op-btn");
let equalButton = document.querySelector(".equal-btn");
let clearButton = document.querySelector(".clear-btn");
let display = document.querySelector(".display");

function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

function multiply(a, b) {
  return +(a*b).toFixed(10);
}

function divide(a, b) {
  return +(a/b).toFixed(10);
}

function operate(a, b, op) {
  switch(op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if(b === 0) {
        alert("Division by zero not possible!!!");
        return 0;
      }
      return divide(a, b);
  }
} 

numButtons.forEach(button => {
  button.addEventListener("click", () => {
    tempNum += button.textContent;
    display.textContent = tempNum;
    console.log("Number clicked. tempNum: " ,tempNum);
  });
});

opButtons.forEach(button => {
  button.addEventListener("click", () => {
    operator = button.textContent;
    if(result) number1 = result;
    else number1 = +tempNum;
    tempNum = "";
    console.log("OP button number1: ",number1);
  });
});

equalButton.addEventListener("click", () => {
  number2 = +tempNum;
  result = operate(number1, number2, operator);
  display.textContent = result; 
  tempNum = "";
  console.log("Equal button. number2: ",number2, "result: ",result);
});

clearButton.addEventListener("click", () => {
  tempNum = "";
  number1 = 0;
  number2 = 0;
  result = 0;
  display.textContent = 0;
  console.clear();
});