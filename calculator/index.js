const readline = require("readline-sync");
const num1 = readline.keyIn("Pick a number: ");
const num2 = readline.keyIn("Pick a second number: ");
function add(num1, num2) {
  console.log(num1 + num2);
}
function sub(num1, num2) {
  console.log(num1 - num2);
}
function mult(num1, num2) {
  console.log(num1 * num2);
}
function div(num1, num2) {
  console.log(num1 / num2);
}
const operator = readline.keyIn(
  "do you want to (a)dd, (s)ubract, (d)ivide, or (m)ultiply? "
);
console.log("The result is... ");
if (operator === "a") {
  console.log(add(num1, num2));
} else if (operator === "s") {
  console.log(sub(num1, num2));
} else if (operator === "d") {
  console.log(div(num1, num2));
} else if (operator === "m") {
  console.log(mult(num1, num2));
}
