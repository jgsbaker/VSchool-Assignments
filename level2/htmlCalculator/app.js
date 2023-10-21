let addIt = document.getElementById("addIt");
let subtractIt = document.getElementById("subtractIt");
let multiplyIt = document.getElementById("multiplyIt");
addIt.addEventListener("click", function () {
  let add = document.getElementById("add");
  let addResult = document.getElementById("addResult");
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  add = x + y;
  addResult.textContent += add;
});
subtractIt.addEventListener("click", function () {
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let subtract = document.getElementById("subtract");
  let subtractResult = document.getElementById("subtractResult");
  subtract = a.value - b.value;
  subtractResult.textContent = subtract;
  return subtract;
});
multiplyIt.addEventListener("click", function () {
  let c = document.getElementById("c");
  let d = document.getElementById("d");
  let multiply = document.getElementById("multiply");
  let multiplyResult = document.getElementById("multiplyResult");
  multiply = c.value * d.value;
  multiplyResult.textContent = multiply;
  return multiply;
});
