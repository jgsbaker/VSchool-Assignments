function sum(x, y){
    return x + y;
}
var user = {username: "sam", password: "123abc"};
function login(username, password){
    if(username === "sam" && password === "123abc"){
        console.log("You're in.")
    }
}
try{
    sum(2,2)
    login("bob", "password")
    login("sam", "123abc")
}
catch(err){
    console.log(err)
}
