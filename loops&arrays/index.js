var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];
let target = "computer";
let counter = 0;
for (office of officeItems) {
  if (office === target) {
    counter++;
  }
}
console.log(counter);

var people = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];
for (let i = 0; i < people.length; i++) {
  let name = people[i].name;
  if (people[i].age >= 18) {
    console.log(name + " is old enough to see Mad Max");
  } else {
    console.log(name + " is not old enough to see Mad Max.");
  }
}
