function fiveAndGreaterOnly(arr) {
  let fiveAndUp = arr.filter((num) => num >= 5);
  return fiveAndUp;
}
console.log(fiveAndGreaterOnly([8, 4, 6, 9, 10]));
function evensOnly(arr) {
  let evens = arr.filter((num) => num % 2 === 0);
  return evens;
}
console.log(evensOnly([4, 7, 9, 2, 5, 10]));
function fiveCharactersOrLessOnly(arr) {
  let fiveChars = arr.filter((item) => item.length <= 5);
  return fiveChars;
}
console.log(
  fiveCharactersOrLessOnly([
    "lasagna",
    "tacos",
    "meat",
    "cheese",
    "sauce",
    "pasta",
  ])
);
function illuminatiMembers(arr) {
  let newArr = [];
  let isAMember = arr.filter((member) => member === true, (newArr += arr.name));
  return isAMember;
}
console.log(
  illuminatiMembers([
    { name: "angelina jolie", member: true },
    { name: "eric jones", member: false },
    { name: "paris hilton", member: true },
    { name: "kanye west", member: false },
  ])
);
