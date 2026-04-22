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


function deleteInput() {
  if (display.value.length > 1 && display.value !== 'Error') {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function applyPercentage() {
  const currentValue = parseFloat(display.value);
  
  if (isNaN(currentValue)) return;
  const result = currentValue / 100;
  display.value = parseFloat(result.toFixed(8)).toString();
}

function Calculate() {
  try {
    let expression = display.value;

    if (!expression || expression === '0') return;

    let result = new Function(`return ${expression}`)();

    if (!isFinite(result)) {
      display.value = 'Error';
      return;
    }

    if (result.toString().includes('.')) {
      display.value = parseFloat(result.toFixed(8));
    } else {
      display.value = result;
    }

  } catch (error) {
    display.value = 'Error';
    setTimeout(clearDisplay, 1500);
  }
}