let form = document.getElementById("custInfo");
let submit = document.getElementById("submit");
let query = document.querySelector;
let firstName = form.elements["firstName"];
let lastName = form.elements["lastName"];
let age = form.elements["age"];
let gender = form.elements["gender"];
let destination = form.elements["destination"];
let diet = form.elements["diet"];
function createAlert() {
  alert(
    "First Name: " +
      firstName.value +
      "\nLast Name: " +
      lastName.value +
      "\nAge: " +
      age.value +
      "\nGender: " +
      gender.value +
      "\nDestination: " +
      destination.value +
      "\nDiet: " +
      diet.value
  );
}
submit.addEventListener("click", createAlert);
