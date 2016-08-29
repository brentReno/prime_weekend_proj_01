console.log('Script is sourced');
// Global variables \\
var employees = [];
var totalSalary = 0;
var monthlySalary = 0;
var clearInputs = function(){
  document.getElementById("firstname").value ="";
  document.getElementById("lastname").value ="";
  document.getElementById("idnumber").value ="";
  document.getElementById("jobtitle").value ="";
  document.getElementById("salary").value ="";
};
var addEmp = function(){
  // get user input
  // create employee object
  var newEmp = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    idNum: document.getElementById("idnumber").value,
    jobTitle: document.getElementById("jobtitle").value,
    salary: parseInt(document.getElementById("salary").value),
  };// end newEmp

  //Alert user that no fields, may be empty
  if ( newEmp.firstName == " "|| newEmp.lastName ==" " || newEmp.idNum == " " ||
  newEmp.jobTitle == " " ||newEmp.salary == " " ){
    // Alert the user
    alert(' All fields are required to create a valid employee');
    setFocus();
    return;
  }
    else{
  // push emp into Employee
      if(isNaN(newEmp.salary) === true){
           alert ('Annual Salary must contain a number.');
           clearInputs();
           setFocus();
           return;
          }//end check blank fields
          else{
            employees.push( newEmp);
            //display employee on the DOM
            displayEmp();
            setFocus();
          }
      }
};//end addEmp
var displayEmp = function(){
  console.log('in displayEmp');
  //clear inputs
  clearInputs();
  //add to DOM
  document.getElementById("employeeResult").innerHTML =" ";
  for (var i = 0; i < employees.length; i++) {
    totalSalary=totalSalary+employees[ i ].salary;
    monthlySalary=totalSalary/12;
    var employeeInfo = "<ul class='list'><li>Employee Name: "+ employees[i].firstName + " "+ employees[i].lastName +
    "<li> Employee Id Number: "+ employees[ i ].idNum +"</li><li> Job Title: " + employees[ i ].jobTitle + "</li><li>Salary: " +
    employees[ i ].salary.toLocaleString('USD', {style: 'currency', currency: 'USD'}) + "</li></li> </ul>" +' <button onClick="removeEmployee ( ' + i + ' )">Remove Employee</button>';
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
  setFocus();
}; // end removeEmployee

// Diplay yearly/monthly Salary information seperatley from Employee informaation
var displaySalary = function(){
  var div = document.createElement("div");
  var divID = 'salaryInfo';
  var divClass = 'salary';
  div.setAttribute('id', divID);
  div.setAttribute('class', divClass);
  div.innerHTML ='<h3>Yearly and Monthly Salaries</h3><p> <strong>Yearly Salary for all Employees: </strong><em>' + totalSalary.toLocaleString('USD', {style: 'currency', currency: 'USD'})+
  '</em></p><p><strong>Monthly Salary for all Employees: </strong><em>' + monthlySalary.toLocaleString('USD', {style: 'currency', currency: 'USD'}) +"</em></p>";
  var employeeInfo =document.getElementById('employeeResult');
  employeeInfo.appendChild(div);
};//end display salary

// setFocus provided by John Arkema- https://github.com/johnark88
var setFocus= function() {
    document.getElementById("firstname").focus();
}//end setFocus
