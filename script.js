let number1 = "";
let operator = "";
let number2 = "";
let result;
let justCalculated = false;

let numButtons = document.querySelectorAll(".num-btn");
let opButtons = document.querySelectorAll(".op-btn");
let equalButton = document.querySelector(".equal-btn");
let clearButton = document.querySelector(".clear-btn");
let display = document.querySelector(".display");

function add(a, b) {
  return +(a+b).toFixed(10);
}

function subtract(a, b) {
  return +(a-b).toFixed(10);
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
    if(justCalculated) {
      number1 = "";
      number2 = "";
      result = "";
      operator = "";  
      justCalculated = false;
    }

    if(operator) {
      number2 += button.textContent;
      display.textContent = number2;
      console.log("Second Number: ", number2 ,typeof number2);
    } else {
      number1 += button.textContent;
      display.textContent = number1
      console.log("First Number: ", number1 ,typeof number1);
    } 
  });
});

opButtons.forEach(button => {
  button.addEventListener("click", () => {
    justCalculated = false;
    if(operator && number2) {
      number1 = operate(+number1, +number2, operator);
      console.log("Second Operator: ",operator ,"First Number: " ,number1);
      number2 = "";
      operator = "";
    }  
    operator = button.textContent;
    console.log("First Operator: ",operator);
  });
});

equalButton.addEventListener("click", () => {
  if(number2 && operator) {
    result = operate(+number1, +number2, operator);
    display.textContent = result;
    console.log("Equal Button. Result: ",result);
    number1 = result;
    number2 = "";
    operator = "";
    justCalculated = true;
  }
});

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  number1 = "";
  number2 = "";
  result = "";
  operator = "";
  justCalculated = false;
  console.clear();
});