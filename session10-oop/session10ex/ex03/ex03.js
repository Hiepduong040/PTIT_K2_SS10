"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("name:", this.name);
        console.log("company:", this.company);
        console.log("phone:", this.phone);
    }
}
let emp1 = new Employee("Hoa", "Hong", 9876543210);
emp1.printInfo();
