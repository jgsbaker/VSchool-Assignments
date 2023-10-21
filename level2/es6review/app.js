let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
name = "spot"
runForLoop(["cat", "dog"])

const carrot = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map((carrot) => type = "carrot", name = carrot)
}
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter((person)=> person.friendly)
}
let doMathSum = (a, b) => a + b

let produceProduct = (a, b) => a * b

function printString(age, firstName, lastName){
    age = 100
    lastName = "Doe"
    firstName = "Jane"
    console.log("Hi "+firstName+" "+ lastName+ + " how does it feel to be " + age+"?")
}
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 function filterForDogs(arr) {
     return arr.filter(animal => animal.type === "dog" ? true : false)
 }
 function collectAnimals(...animals) {  
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]
function combineFruit(fruit, sweets, vegetables){
    let food = [fruit + sweets + vegetables]
    console.log(food)
}
combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
// => {
//         fruit: ["apple", "pear"];
//         sweets: ["cake", "pie"];
//         vegetables: ["carrot"]
//      }
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav = favoriteActivities[0]
    let secondFav = favoriteActivities[1]
    let thirdFav = favoriteActivities[2]
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

returnFavorites(favoriteActivities)
function combineAnimals(...arr) {  
    return arr
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]
function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
    return numbers.reduce((acc, number)=> acc * number, 1)
let shifting =  unshift((array, a, b, c, d, e) => [a, b, c, d, e].concat(array));
}