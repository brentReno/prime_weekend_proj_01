console.log('Script is sourced');
// Global variables \\
var employees = [];
var totalSalary = 0;
var monthlySalary = 0;
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

  //add to DOM

  document.getElementById("employeeResult").innerHTML =" ";
  for (var i = 0; i < employees.length; i++) {
    totalSalary=totalSalary+employees[ i ].salary;
    monthlySalary=totalSalary/12;
    var employeeInfo = "<ul><li>Employee Name: "+ employees[i].firstName + " "+ employees[i].lastName +
    "<li> Employee Id Number: "+ employees[ i ].idNum +"</li><li> Job Title: " + employees[ i ].jobTitle + "</li><li>Salary: " +
    employees[ i ].salary + "</li></li> </ul>" +' <button onClick="removeEmployee( ' + i + ' )">Remove Employee</button>';
    document.getElementById("employeeResult").innerHTML += employeeInfo;
  }//end for
  displaySalary();
totalSalary = 0;
monthlySalary= 0;
};//end display Employee

var removeEmployee= function( index ){
  //log deleted employee
  console.log( 'Employee: ' + employees [ index ].firstName + employees [ index ].lastName + " removed.");
  //remove employee from the DOM
   employees.splice(index,1);
   //ReDisplay employees
  displayEmp();
}; // end removeEmployee

// Diplay yearly/monthly Salary informaation seperatley from Employee informaation
var displaySalary = function(){
  var div = document.createElement("div");
  var divID = 'salaryInfo';
  div.setAttribute('id', divID);
  div.innerHTML ='<h3>Yearly and Monthly Salaries</h3><p> Yearly Salary for all Employees: ' + totalSalary+
  'Monthly Salary for all Employees: ' + monthlySalary;
  var employeeInfo =document.getElementById('employeeResult');
  employeeInfo.appendChild(div);
};//end display salary
