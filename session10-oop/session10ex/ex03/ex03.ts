class Employee {
    name:string
    company: string
    phone: number
    
    constructor(name:string,company: string,phone: number){
        this.name = name
        this.company = company
        this.phone = phone
        
    }
    printInfo():void{
        console.log("name:",this.name);
        console.log("company:",this.company);
        console.log("phone:",this.phone);
    }
}

let emp1 = new Employee("Hoa","Hong",9876543210)
emp1.printInfo()