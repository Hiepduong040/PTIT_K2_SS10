"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vehicle1 = new Vehicle("Camry", 2010, "Toyota");
let vehicle2 = new Vehicle("Camry2", 2012, "Toyota2");
console.log(vehicle1);
console.log(vehicle2);
