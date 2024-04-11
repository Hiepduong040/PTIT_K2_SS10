class Department {
    public readonly id: number;
    private name: string;
    private employee: Employee[] = [];

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.employee = [];
    }

    addEmployee(employee: Employee): void {
        this.employee.push(employee);
    }

    describe(): void {
        console.log("id:", this.id);
        console.log("Tên phòng ban:", this.name);
        console.log("Danh sách nhân viên:");
        this.employee.forEach((employee) => {
            console.log("  -", employee.name);
        });
    }
}

class Employee {
    public readonly id: number;
    public readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

let department = new Department(1, "IT");
department.addEmployee(new Employee(2, "A"));
department.addEmployee(new Employee(4, "B"));
department.addEmployee(new Employee(3, "C"));

department.describe();