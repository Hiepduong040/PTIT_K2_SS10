class Student {
    id: number
    age: number
    email: string
    constructor(id: number, age: number, email: string) {
        this.id = id
        this.age = age
        this.email = email
    }
}

let std1 = new Student(1,12,"std1@gmail.com")   
let std2 = new Student(2,13,"std2@gmail.com")
let std3 = new Student(3,14,"std3@gmail.com")
let std4 = new Student(4,15,"std4@gmail.com")
let stdList: Student[] = [std1, std2, std3, std4]
console.log(stdList);
