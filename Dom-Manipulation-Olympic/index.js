const clear = document.getElementById("clear-button")
const dropDown = document.getElementById("theme-drop-down")
const select = document.getElementsByTagName("select")
const msgs = documennt.getElementById("messages")
var header = document.getElementById("header")
var h3 = document.createElement("h3")
var h4 = document.createElement("h4")
var msg1 = document.getElementById("msg1")
var msg2 = document.getElementById("msg2")
var msg3 = document.getElementById("msg3")
var msg4 = document.getElementById("msg4")
var input = document.getElementById("input")
var send = document.getElementById("send")
header.textContent = "DOM Manipulation Olympics"
h3.textContent = "Jack Gypsy Baker"
h4.textContent = " made this with Javascript"
header.append(h3)
header.appendChild(h4)
header.style.display = "inline"
header.style.position = "absolute"
header.style.left ="40%"
h3.style.position = "absolute"
h4.style.position = "absolute"
h3.style.display = "inline"
h4.style.display = "inline"
h3.style.color = "orange"
h3.style.top = "10%"
h4.style.top = "10%"
h4.style.left = "57%"
h3.style.right = "57%"
msg1.textContent = "I hear y'all are throwin' down a hoedown later"
msg2.textContent = "Yeah! You're welcome to come, it's two haybells and a tractor past the gate to the Barn."
msg3.textContent = "You oughta be a party planner! Your barnyard jammers are the best!"
clear.addEventListener("click", function cleared()
{
    msg1.textContent = ""
    msg2.textContent = ""
    msg3.textContent = ""
    msg4.textContent = ""
    msg1.style.backgroundColor = "white"
    msg2.style.backgroundColor = "white"
    msg3.style.backrgoundColor = "white"
    msg4.style.backgroundColor = "white"
})