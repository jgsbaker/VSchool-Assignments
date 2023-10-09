function solution(arr){
    return arr.sort((a,b)=>a>=0 & b >=0 ? a-b : +Infinity)
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))
function countVowels(str){
    return Array.from(str).filter(letter => "aeiou".includes(letter)).length
}
const input = 'Hello, World!';

console.log(countVowels(input)); // Output: 3
const input1 = 'Counting Vowels';

console.log(countVowels(input1)); // Output: 5
function isPalindrome(str){
    let lowerCase = str.toLowerCase()
    let backward =Array.from(str).reverse().join("")
    console.log(backward)
    if(str === backward) {
        let palindrome = true
        console.log("This is a palindrome!")
    }
    else if(str !== backward){
        let palindrome = false
        console.log("This is not a palindrome.")
    }
}
isPalindrome("racecar")
isPalindrome("book")
### **Sum of Two**

Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.
// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {
 
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]