const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'Java'},
    //... More employee records can be added here
  ];

const Details = document.getElementById('employeesDetails');
function displayEmployees(){
    let empDetails = employees.map((emp)=>`<p>Employee ID:${emp.id} Employee Age: ${emp.age} Employee Department: ${emp.department} Employee Salary: ${emp.salary}  <p>`).join(' ');
    
    Details.innerHTML+= empDetails;
  }

function calculateTotalSalaries(){
    const total = employees.reduce((total,emp)=>total+= emp.salary,0);
    Details.innerHTML+= `<p>Total Salary is: ${total}</p>`;
}

function displayHREmployees() {
    const hr= employees.filter((emp)=>emp.department=='HR');
    Details.innerHTML+= "<p>HR Employees are:</p>"
    hr.forEach(h=>{
        Details.innerHTML+=`<p>Employee Id: ${h.id} Employee Name: ${h.name} Employee Department: ${h.department} Employee Salary: ${h.salary}</p>`;
    })

}

function findEmployeeById(id){
    const emp = employees.find((emp)=> emp.id==2)
    Details.innerHTML+= "<p>The required Employee is: </p>";
    Details.innerHTML+=`<p>Employee Id: ${emp.id} Employee Name: ${emp.name} Employee Department: ${emp.department} Employee Salary: ${emp.salary}</p>`;
}

function findEmployeeBySpecialization(specialization){
    const specializedEmp = employees.filter((emp)=>emp.specialization==specialization);
    specializedEmp.forEach((e)=>Details.innerHTML+= `<p>Employee Id: ${e.id} Employee Name: ${e.name} Employee Department: ${e.department} Employee Salary: ${e.salary}  Employee Specialization: ${e.specialization}</p>`)
}