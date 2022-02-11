"use strict";

window.addEventListener("load", start);
let number1;
let number2;
let result;

const operatorSign = document.querySelector("#operator");
const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const checkBox = document.querySelector("#doround");
//------------------------
function start() {
  console.log("start");
  document.querySelector("#calculate").addEventListener("click", readValue);
  document.querySelector("#clear").addEventListener("click", clearList);
}
//------------------------
function clearList() {
  document.querySelectorAll("#results li").forEach((li) => {
    li.remove();
  });
}
//-------------------------
function readValue() {
  console.log("value");
  number1 = Number(firstNumber.value);
  number2 = Number(secondNumber.value);
  console.log(number1);
  console.log(number2);
  if (number1 && number2) {
    calculate();
  } else {
    alert("remember to fill both boxes");
  }
}
//------------------------------------
function calculate() {
  console.log("calculate");

  if (operatorSign.value === "add") {
    console.log("plus");
    result = number1 + number2;
    roundResult();
  }

  if (operatorSign.value === "sub") {
    result = number1 - number2;
    roundResult();
  }

  if (operatorSign.value === "mul") {
    result = number1 * number2;
    roundResult();
  }
  if (operatorSign.value === "div") {
    result = number1 / number2;
    roundResult();
  }

  console.log(result);
}
//-------------------------------------
function roundResult() {
  if (checkBox.checked) {
    let numberDecimals = document.querySelector("#decimals").value;
    result = result.toFixed(numberDecimals);
  }
  logResult();
}
//-------------------------------------
function logResult() {
  firstNumber.value = result;
  let x = document.createElement("LI");
  let t = document.createTextNode(result);
  x.appendChild(t);
  document.querySelector("#results").appendChild(x);
  scrollList();
}
//--------------------------------------
function scrollList() {
  let lastLi = document.querySelector("#results li:last-child");
  lastLi.scrollIntoView(true);
}

