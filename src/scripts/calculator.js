export default class Calculator {
  constructor(currentNumberElement, previousNumberElement) {
    this.currentNumberElement = currentNumberElement;
    this.previousNumberElement = previousNumberElement;
    this.reset();
  }

  reset() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }

  deleteChar() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  updateNumber(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentNumber === "") return;
    if (this.previousNumber !== "") {
      this.solve();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  solve() {
    let computation;
    const prev = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previousNumber = "";
    console.log();
  }

  getNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentNumberElement.textContent = this.getNumber(this.currentNumber);
    if (this.operation != null) {
      this.previousNumberElement.textContent = `${this.getNumber(
        this.previousNumber
      )} ${this.operation}`;
    } else {
      this.previousNumberElement.textContent = "";
    }
  }
}
