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
let backspaceButton = document.querySelector(".backspace-btn");

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

function resetAfterCalculated() {
  if(justCalculated) {
    number1 = "";
    number2 = "";
    result = "";
    operator = "";  
    justCalculated = false;
  }
}

function numClickFn(buttonContent) {
  if(operator) {
    if(!(number2.includes(".") && buttonContent === ".")) {
      number2 += buttonContent;
      display.textContent = number2;
      console.log("Second Number: ", number2 ,typeof number2);
    }
  } 
  else {
    if(!(number1.includes(".") && buttonContent === ".")) {
      number1 += buttonContent;
      display.textContent = number1
      console.log("First Number: ", number1 ,typeof number1);
    }
  } 
}

function numPressFn(key) {
  if(operator) {
    if(!(number2.includes(".") && key === ".")) {
      number2 += key;
      display.textContent = number2;
      console.log("Second Number: ", number2 ,typeof number2);
    }
  } 
  else {
    if(!(number1.includes(".") && key === ".")) {
      number1 += key;
      display.textContent = number1
      console.log("First Number: ", number1 ,typeof number1);
    }
  }
}

function opClickFn() {
  justCalculated = false;
  if(operator && number2) {
    number1 = operate(+number1, +number2, operator);
    console.log("Second Operator: ",operator ,"First Number: " ,number1);
    number2 = "";
    operator = "";
  }  
}

function equalClickFn() {
  if(number2 && operator) {
    result = operate(+number1, +number2, operator);
    display.textContent = result;
    console.log("Equal Button. Result: ",result);
    number1 = result;
    number2 = "";
    operator = "";
    justCalculated = true;
  }
}

function clearClickFn() {
  display.textContent = "0";
  number1 = "";
  number2 = "";
  result = "";
  operator = "";
  justCalculated = false;
  console.clear();
}

function backspaceClickFn() {
  if(display.textContent === number1) {
    number1 = number1.slice(0, -1);
    display.textContent = number1;
  } else if(display.textContent === number2) {
    number2 = number2.slice(0, -1);
    display.textContent = number2;
  } else {
    display.textContent = "0";
  }
}

numButtons.forEach(button => {
  button.addEventListener("click", () => {
    resetAfterCalculated();
    numClickFn(button.textContent);
  });
});

opButtons.forEach(button => {
  button.addEventListener("click", () => {
    opClickFn();
    operator = button.textContent;
    console.log("First Operator: ",operator);
  });
});

equalButton.addEventListener("click", () => equalClickFn());

clearButton.addEventListener("click", () => clearClickFn());

backspaceButton.addEventListener("click", () => backspaceClickFn());

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if((key >= "0" && key <= "9") || key === ".") {
    resetAfterCalculated();
    numPressFn(key);
  }
  else if(key === "+" || key === "-" || key === "*" || key === "/") {
    opClickFn();
    operator = key;
    console.log("First Operator: ",operator);
  }
  else if(key === "Enter" || key === "=") {
    equalClickFn();
  }
  else if(key === "Escape") {
    clearClickFn();
  }
  else if(key === "Backspace") {
    backspaceClickFn();
  }
});