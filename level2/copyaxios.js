const todoForm = document.todoForm
const list = document.getElementById("list")
let check
let todo = {
    title : String + todoForm.title,
    description : String + todoForm.description.value,
    price : Number + todoForm.price.value,
    imgURL : todoForm.imgURL.value,
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
    check.addEventListener("change", ()=> checked(todo))
    div.appendChild(check)
    let dlt = document.createElement("button")
    dlt.textContent = "delete" 
    dlt.addEventListener("click", ()=>deleted(todo))
    div.appendChild(dlt)
}
function todoList(todo){
    axios.get("https://api.vschool.io/jackgypsybaker/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            let img = document.createElement("img")
            img.src = todo.imgURL
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
        imgURL : todoForm.imgURL.value,
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
function handleCheck(todo){
    
}
function checked(todo){
    axios.put(`https://api.vschool.io/jackgypsybaker/todo/${todo._id}`, todo)
    .then(response => {
        if(response.data.completed === false){
            // todo.style.textDecoration = "line-through"
            response.data.completed = true
        }
        else if(response.data.completed === true){
            // todo.style.textDecoration = "none"
            response.data.completed = false
        }
        handleCheck(response.data)
        console.log(response.data)
    })
    .catch((error)=>console.log(error))
}
function deleted(todo){
    axios.delete(`https://api.vschool.io/jackgypsybaker/todo/${todo._id}`, Todo)
    .then(response =>{
        console.log(response.data)
        console.log(todo)
    })
    .catch((error)=>console.log(error.response.data))
}