console.log('Script is sourced');
// Global variables \\
var employees = [];
var totalSalary = 0;
var addEmp = function(){
  // get user input
  // create employee object
  var newEmp = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    idNum: document.getElementById("idnumber").value,
    jobTitle: document.getElementById("jobtitle").value,
    salary: Number(document.getElementById("salary").value),
  };// end newEmp
  console.log( newEmp );
  // push emp into Employees
 employees.push( newEmp);
 //display employee on the DOM
 displayEmp();
};//end newEmp

var displayEmp = function(){
  console.log('in displayEmp');
  //clear inputs
  document.getElementById("firstname").value ="";
  document.getElementById("lastname").value ="";
  document.getElementById("idnumber").value ="";
  document.getElementById("jobtitle").value ="";
  document.getElementById("salary").value ="";
  //variables

  //add to DOM

  document.getElementById("employeeResult").innerHTML =" ";
  for (var i = 0; i < employees.length; i++) {
    var employeeInfo = "<ul><li>Employee Name: "+ employees[i].firstName + " "+ employees[i].lastName +
    "<li> Employee Id Number: "+ employees[ i ].idNum +"</li><li> Job Title: " + employees[ i ].jobTitle + "</li><li>Salary: " +
    employees[ i ].salary + "</li><li>Total Salary for Company:" + (totalSalary=totalSalary+employees[ i ].salary) + " </ul>";
    document.getElementById("employeeResult").innerHTML += employeeInfo;

  }//end for
totalSalary = 0;
};
