let count = 0;
let string = "";
let sum = 0;
let countEl = document.getElementById("count-el");
let count1El = document.getElementById("count1-el");

function replace(sign) {
  if (
    string[string.length - 1] == "+" ||
    string[string.length - 1] == "-" ||
    string[string.length - 1] == "*" ||
    string[string.length - 1] == "/" ||
    string[string.length - 1] == "%" ||
    string[string.length - 1] == "."
  ) {
    string = string.slice(0, -1);
  }
  string += sign;
  countEl.textContent = string;
}

function button(arg) {
  pressNumber();
  string += arg;
  countEl.textContent = string;
}

function calculation(operation) {
  switch (operation) {
    case "+":
      replace("+");
      break;
    case "-":
      replace("-");
      break;
    case "*":
      if (string.length != 0) {
        replace("*");
      }
      break;
    case "/":
      if (string.length != 0) {
        replace("/");
      }
      break;
    case "%":
      if (string.length != 0) {
        replace("%");
      }
      break;
    case ".":
      replace(".");
      break;
  }
}

function equalto() {
  sum = eval(countEl.textContent);
  count1El.textContent = string;
  string = "" + sum;
  countEl.textContent = string;
}

function pressNumber() {
  if (string == sum) {
    if (
      string[string.length - 1] == "1" ||
      string[string.length - 1] == "2" ||
      string[string.length - 1] == "3" ||
      string[string.length - 1] == "4" ||
      string[string.length - 1] == "5" ||
      string[string.length - 1] == "6" ||
      string[string.length - 1] == "7" ||
      string[string.length - 1] == "8" ||
      string[string.length - 1] == "9" ||
      string[string.length - 1] == "0"
    ) {
      C();
    }
  }
}

function CE() {
  string = "";
  countEl.textContent = 0;
  count1El.textContent = 0;
}

function C() {
  string = "";
  countEl.textContent = 0;
  count1El.textContent = 0;
}

function Del() {
  if (string == sum) {
    count1El.textContent = 0;
  } else {
    string = string.slice(0, -1);
    countEl.textContent = string;
  }
}
