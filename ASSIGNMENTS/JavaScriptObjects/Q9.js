function EmployeeDetails(){

    const emps =[
        {empId: 101, name: "Alice", salary: 75000},
        { empId: 102, name: "Bob", salary: 60000 },
        { empId: 103, name: "Charlie", salary: 55000 },
        { empId: 104, name: "Diana", salary: 50000 }
    ];

    emps.forEach(employee => {
        console.log(`${employee.empId}\t${employee.name}\t${employee.salary}`);
    });
}

EmployeeDetails()