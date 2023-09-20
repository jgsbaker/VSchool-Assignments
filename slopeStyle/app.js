function colectAAnimals(...arr){
    let conc = arr.concat()
    console.log(conc)
}
collectAnimals("dog", "car", "mouse", "jackolope", "platypus")
function combineFruit(...arr){
    let food =arr.reduce((a,b)=>a+b)
    return food
}
combineFruit(["apple", "pear"], ["cake", "pie"],["carrot", "corn"])
function paraSentence(________){
    let location = "The Bay"
    let duration = "Two Weeks"
    return "We're going to have a good time in ${loation} for ${duration}"
}
