console.log('Script is sourced');
// Global variables \\
var employees = [];

var addEmp = function(){
  // get user input
  // create employee object
  var newEmp = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    idNum: document.getElementById("idnumber").value,
    jobTitle: document.getElementById("jobtitle").value,
    salary: document.getElementById("salary").value,
  };// end newEmp
  console.log( newEmp );
  // push emp into Employees
 employees.push( newEmp);
};
