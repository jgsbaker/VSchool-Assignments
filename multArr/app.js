let peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
function sortedOfAge(arr){
    let age = arr.filter((peopleArray)=>peopleArray.age >= 18)
    let liness = age.splice((item)=>item.unsift("<li>")) 
    let more = liness.splice((item)=>item.push("</li>"))
    let alpha = more.sort((a,b)=>a-b)
    return JSON.stringify(alpha)
}
console.log(sortedOfAge(peopleArray));