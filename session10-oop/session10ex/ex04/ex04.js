"use strict";
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    readName() {
        console.log("name:", this.name);
    }
}
let vehicle1 = new Vehicle(1, "Camry", 2010, "Toyota");
let vehicle2 = new Vehicle(2, "Camry2", 2012, "Toyota2");
console.log(vehicle1);
console.log(vehicle2);
