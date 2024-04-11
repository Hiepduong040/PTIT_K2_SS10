"use strict";
class Department {
    constructor(id, name) {
        this.employee = [];
        this.id = id;
        this.name = name;
        this.employee = [];
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    describe() {
        console.log("id:", this.id);
        console.log("Tên phòng ban:", this.name);
        console.log("Danh sách nhân viên:");
        this.employee.forEach((employee) => {
            console.log("  -", employee.name);
        });
    }
}
class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let department = new Department(1, "IT");
department.addEmployee(new Employee(2, "A"));
department.addEmployee(new Employee(4, "B"));
department.addEmployee(new Employee(3, "C"));
department.describe();
