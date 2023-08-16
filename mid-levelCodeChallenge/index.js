// var title;
// var author;
// var year;
// constructor(title, author, year);
// {
//   function book() {
//     new book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
//     new book("To Kill a Mockingbird", "Harper Lee", 1960);
//   }
// }
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getDetails = function () {
    console.log(`This book is called ${this.title}`);
  };
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book2);
book2.getDetails();

var nums = [];
function removeDuplicates(nums) {
  return nums.filter((item, index) => nums.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([5, 5, 5, 5, 5]));

function findEvenNumbers(arr) {
  //step 1 iterate array
  //step 2 identify the even numbers
  //step 3 return arr with even numbers

  const numArr = arr.filter((num) => num % 2 === 0);
  return numArr;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2,4,6,8,10]

//talk it out // ?s

//psuedo coding plan

//solve
