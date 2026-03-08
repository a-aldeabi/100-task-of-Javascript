// Task06: simple calculator

const display = document.getElementById("display-number");
const buttons = document.querySelectorAll(".digit-num, .operator");
const equal = document.getElementById("equal");
const operators = ["+", "-", "*", "/"];

display.textContent = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    const lastChar = display.textContent.slice(-1);

    if (operators.includes(value)) {
      if (!operators.includes(lastChar) && display.textContent !== "Error") {
        display.textContent += value;
      }
      return;
    }

    if (!isNaN(value) || value === ".") {
      if (display.textContent === "0" || display.textContent === "Error") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
equal.addEventListener("click", () => {
  try {
    const expr = display.textContent;
    if (/^[0-9+\-*/.]+$/.test(expr)) {
      let result = eval(expr);

      display.textContent = Number(result).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    } else {
      display.textContent = "Error";
    }
  } catch {
    display.textContent = "Error";
  }
});
