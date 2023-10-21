function display() {
  let cheepCheepPrice = document.getElementById("cheepCheepPrice").value;
  let bobombPrice = document.getElementById("bob-ombPrice").value;
  let goombaPrice = document.getElementById("goombaPrice").value;
  let listTotal = document.getElementById("listTotal");
  let goombaCost = 5;
  let bobombCost = 7;
  let cheepCheepCost = 11;
  let goombaTotal = goombaPrice * goombaCost;
  let bobombTotal = bobombCost * bobombPrice;
  let cheepCheepTotal = cheepCheepCost * cheepCheepPrice;
  let total = goombaTotal + bobombTotal + cheepCheepTotal;
  listTotal.textContent += total;
}
totalPrice.addEventListener("click", display);
