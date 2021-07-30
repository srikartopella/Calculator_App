import Calculator from "./calculator.js";

// Selectors
const displaySection = document.querySelector("#display");
const numBtnGroup = document.querySelectorAll(".num-btn");
const deleteBtn = document.querySelector("#btn-del");
const addBtn = document.querySelector("#btn-plus");
const minusBtn = document.querySelector("#btn-minus");
const dotBtn = document.querySelector("#btn-dot");
const divideBtn = document.querySelector("#btn-divide");
const crossBtn = document.querySelector("#btn-cross");
const resetBtn = document.querySelector("#btn-reset");
const equalBtn = document.querySelector("#btn-equal");
const previousDisplay = document.querySelector("#previous");

const calculator = new Calculator(displaySection, previousDisplay);

numBtnGroup.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.updateNumber(btn.textContent);
    calculator.updateDisplay();
  });
});

[addBtn, minusBtn, crossBtn, divideBtn].forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.value);
    calculator.updateDisplay();
  });
});

equalBtn.addEventListener("click", (button) => {
  calculator.solve();
  calculator.updateDisplay();
});

resetBtn.addEventListener("click", (button) => {
  calculator.reset();
  calculator.updateDisplay();
});

deleteBtn.addEventListener("click", (button) => {
  calculator.deleteChar();
  calculator.updateDisplay();
});
