function doubleNumbers(arr) {
  let double = arr.map((n) => n * 2);
  return double;
}
console.log(doubleNumbers([1, 2, 3]));
function stringItUp(arr) {
  let strings = arr.map((n) => JSON.stringify(n));
  return strings;
}
console.log(stringItUp([4, 5, 6]));
function capitalizeNames(arr) {
  let caps = arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1, 5));
  return caps;
}
console.log(capitalizeNames(["john", "bob", "billy"]));
function namesOnly(arr) {
  let names = arr.map((item) => item.name);
  return names;
}

function canGo(arr) {
  let going = arr.map((item) =>
    item.age >= 18
      ? console.log(item.name + " can go")
      : console.log(item.name + " can't go.")
  );
}
console.log(
  canGo([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Kanye West", age: 16 },
  ])
);
function puttingInTheDom(arr) {
  let names = arr.map(
    (item) => (item.name = console.log("<h1>" + item.name + "</h1>"))
  );
  let ages = arr.map(
    (item) => (item.age = console.log("<h2>" + item.age + "</h2>"))
  );
  return names + ages;
}
console.log(
  puttingInTheDom([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Kanye West", age: 16 },
  ])
);
