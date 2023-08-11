const form = document.getElementById("add");
function addItems() {
  let li = document.createElement("li");
  var item = document.createElement("div");
  var input = document.getElementById("inputItem");
  var dltBtn = document.createElement("button");
  var edit = document.createElement("button");
  dltBtn.textContent = "X";
  edit.textContent = "edit";
  item = input.value;
  li.textContent += item;
  li.append(dltBtn);
  document.body.append(li);
  input.value = "";
  dltBtn.addEventListener("click", function deleted() {
    li.remove();
  });
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const items = addItems();
  let ul = document.getElementById("list");
  ul.setAttribute;
  ul.append(items);
});
