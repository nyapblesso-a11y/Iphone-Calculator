const display = document.getElementById('display');
function clearDisplay() {
  display.value = '0';
}

function appendToDisplay(input) {
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/'];
}