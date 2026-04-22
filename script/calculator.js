const display = document.getElementById("display");
function clearDisplay() {
  display.value = "0";
}

function appendToDisplay(input) {
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/"];

  if (display.value === "0" && !operators.includes(input) && input !== ".") {
    display.value = input;
    return;
  }

  if (operators.includes(input) && operators.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + input;
    return;
  }

  if (input === ".") {
    const parts = display.value.split(/[\+\-\*\/]/);
    const currentNumber = parts[parts.length - 1];
    if (currentNumber.includes(".")) return;
  }

  display.value += input;
}
