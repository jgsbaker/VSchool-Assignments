var title;
var author;
var year;
constructor(title, author, year);
{
  function book() {
    new book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
    new book("To Kill a Mockingbird", "Harper Lee", 1960);
  }
}
console.log(book);
var nums = [];
function removeDuplicates(nums) {
  return nums.filter((item, index) => nums.indexOf(item) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([5, 5, 5, 5, 5]));
