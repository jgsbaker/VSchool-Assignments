var employees = [];
function Employee(name, jobTitle, salary, status = "Full Time") {
  this.name = name;
  this.jobTitle = jobTitle;
  this.salary = salary;
  printEmployeeForm = function () {
    console.log(name + ", " + jobTitle + ", " + salary + ", " + status);
  };
}

var emp1 = new Employee("Bob", "Builder", "$50,000");
printEmployeeForm(emp1);
var emp2 = new Employee("Jack", "Pumpkin King", "$200,000", "Part Time");
printEmployeeForm(emp2);
var emp3 = new Employee("Harry", "Auror", "300,000 Galleons");
printEmployeeForm(emp3);
employees = [].concat(emp1, emp2, emp3);
