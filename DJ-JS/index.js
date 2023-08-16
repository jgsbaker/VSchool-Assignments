var cont = document.getElementById("cont")
function blue()
{
    cont.style.backgroundColor = "blue"
}
function red()
{
    cont.style.backgroundColor = "red"
}
function yellow()
{
    cont.style.backgroundColor = "yellow"
}
function green()
{
    cont.style.backgroundColor = "green"
}
function orange()
{
    cont.style.backgroundColor = "orange"
}
cont.addEventListener("mouseover", blue)
cont.addEventListener("mousedown", red)
cont.addEventListener("mouseup", yellow)
cont.addEventListener("dblclick", green)
cont.addEventListener("mouseleave" && "mouseout", orange)
document.addEventListener("keypress",(event) =>
{
    let cont = document.getElementById("cont")
    if(event.key ==="b")
    {
        cont.style.backgroundColor = "blue"
    }
    else if(event.key=== "r")
    {
        cont.style.backgroundColor = "red"
    }
    else if(event.key === "y")
    {
        cont.style.backgroundColor = "yellow"
    }
    else if(event.key === "g")
    {
        cont.style.backgroundColor = "green"
    }
    else if(event.key === "o")
    {
        cont.style.backgroundColor = "orange"   
    }
})