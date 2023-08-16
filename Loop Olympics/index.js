for (let i = 0; i <= 9; i++) {
  console.log(i);
}
for (let i = 0; i <= 9; i++) {
  let nums = [i].reverse();
  console.log(nums);
}
const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
var num = [];
for (let i = 0; i <= 9; i++) {
  num = [i];
  console.log(num);
}
for (let i = 0; i <= 100; i++) {
  let numbs = [i];
  const even = numbs.filter((num) => num % 2 === 0);
  console.log(even);
}
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (let i = 0; i < fruits.length; i++) {
  let printed = fruits.filter((fruits, index) => {
    return index % 2 === 0;
  });
  console.log(printed);
  break;
}
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];
for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}
for (let i = 0; i < peopleArray.length; i++) {
  var names = peopleArray[i].name;
  var occupations = peopleArray[i].occupation;
  console.log(names);
  console.log(occupations);
}
