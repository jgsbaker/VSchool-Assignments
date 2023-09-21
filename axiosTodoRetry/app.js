const todoForm = document.todoForm
const list = document.getElementById("list")
let check
let todo = {
    title : String + todoForm.title,
    description : String + todoForm.description.value,
    price : Number + todoForm.price.value,
    imgUrl : todoForm.imgUrl.value,
    completed : Boolean + todoForm.completed
}
function makeTodo(todo)
{
    let div = document.createElement('div')
    let h1 = document.createElement("h1")
    h1.textContent = "title: " + todo.title +"\n" + ", description: "+ todo.description + "\n" + ", price: " + todo.price + "\n" + ", completed? " + todo.completed
    list.appendChild(div)
    div.appendChild(h1)
    check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    check.setAttribute("name", "check")
    check.addEventListener("click", ()=> checked(todo,div))
    div.appendChild(check)
    if(todo.completed === true){
        check.checked = true
        div.style.textDecoration = "line-through"
    }
    let dlt = document.createElement("button")
    dlt.textContent = "delete" 
    dlt.addEventListener("click", ()=>deleted(todo))
    div.appendChild(dlt)
}
function todoList(todo){
    axios.get("https://api.vschool.io/jackgypsybaker/todo")
    .then(response => {
        console.log(response.data)
        for(let i = 0; i < response.data.length; i++){
            let img = document.createElement("img")
            console.log(response.data[i].imgUrl)
            img.src = `${response.data[i].imgUrl}`
            list.append(img)
            makeTodo(response.data[i])
        }
    })
    .catch(error => console.log(error))
}
todoList()
function addTodo(todo){
    todo = {
        title:todoForm.title.value,
        description : todoForm.description.value,
        price : todoForm.price.value,
        imgUrl : todoForm.imgUrl.value,
        completed : todoForm.completed
        }
    axios.post("https://api.vschool.io/jackgypsybaker/todo",todo)
    .then(response =>() => {
        todoList()
    })
    .catch((error)=>console.log(error.response.data))
}
let btn = document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
    addTodo()
})
function checked(todo, div){
    console.log(todo)
    if(check.checked === true){
        div.style.textDecoration = "line-through"
        axios.put(`https://api.vschool.io/jackgypsybaker/todo/${todo._id}`, {completed: true})
        .then(response => console.log(response.data))
        .catch((error)=>console.log(error)) 
    } else if(check.checked === false){
        div.style.textDecoration = "none"
        axios.put(`https://api.vschool.io/jackgypsybaker/todo/${todo._id}`, {completed: false})
        .then(response => console.log(response.data))
        .catch((error)=>console.log(error))
    }
}
function deleted(todo){
    axios.delete(`https://api.vschool.io/jackgypsybaker/todo/${todo._id}`)
    .then(response =>{
        console.log(response.data)
        console.log(todo)
    })
    .catch((error)=>console.log(error.response.data))
}