function total(arr){
    return arr.reduce((a,b)=>a+b)
}
console.log(total([1,2,3]))
function stringConcat(arr){
    let conc = arr.toString()
    let strings = JSON.stringify(conc)
    return strings
}
console.log(stringConcat([1,2,3]))
function totalVotes(arr){
    return arr.filter((voters)=>voters.voted).length
}
let voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age:25, voted:false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age:21, voted: true},
    {name: "Ed", age:55, voted:true},
    {name: "Tami", age:54, voted:true},
    {name: "Mary", age:31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age:30, voted:true},
    {name: "Zack", age: 19, voted:false}
]
console.log(totalVotes(voters))
function shoppingSpree(arr) {
   // your code here
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    let newArr = arr.reduce((a,b)=>JSON.stringify(a+b))
    let newString = newArr.toString()
    return newString
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten([arrays])); // ["1", "2", "3", true, 4, 5, 6];
 function voterResults(arr) {
    let youth = [arr.filter((voters)=>voters.age >=18 & voters.age <=25)]
    let youthVoted = youth.reduce((voters)=>voters.voted)
    let mids = [arr.filter((voters)=>voters.age >=26 & voters.age <=35)]
    let midsVoted = mids.reduce((voters)=>voters.voted)
    let elder = [arr.filter((voters)=>voters.age >=46 & voters.age <=55)]
    let elderVoted = elder.reduce((voters)=>voters.voted)
    console.log("youth: " + youth.length + "\nyouthVotes: " + youthVoted.length + "\nmiddle aged: " + mids.length + "\nmiddle aged voted: " + midsVoted.length + "\nelders: " + elder.length + "\nelder votes: " + elderVoted.length)
    return youth, youthVoted, mids, midsVoted, elder, elderVoted
}

console.log(voterResults(voters)); // Returned value shown below:
 /*
 { numYoungVotes: 1,
   numYoungPeople: 4,
   numMidVotesPeople: 3,
   numMidsPeople: 4,
   numOldVotesPeople: 3,
   numOldsPeople: 4
 }
 */
 