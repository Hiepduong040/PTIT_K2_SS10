"use strict";
/*
    các cách tạo đối tượng trong js
    1. let, const, var_ tên đối tượng ={}
    2. dùng new Object()
    3.
        tạo hàm constructor
        function Student(name){
            this.name=name
        }
        let student1 = new Student("hoa")
        let student2 = new Student("Lan")
        // đây mới là cách hằng tạo đối tượng trong js
    4.
        tạo class
        class Person{
            constructor(name,age,address){
                this.name=name;
                this.age=age;
                this.address=address;

            }
        }
        let std1 = new Person("hoa",20,"Hà Nội")
        let std2 = new Person()
        // đây là cách tạo đối tượng trong thông qua từ khóa new
    
        1. đối tượng sẽ gồm 2 thành phần
         + thuộc tính(property)
         + phương thức(method)
         OOP: gồm 4 tính chát
         + kế thừa
         + đóng gói: che dâu thông tin đối tượng
         ===> nhằm giúp cho các truy cập đến dối tượng được bảo mật hơn
         + đa hình
         + nguyên thể
        





*/
class Person {
    // trong trường hợp phạm vi là private
    // để truy cập được thì thông qua 
    constructor(name, age) {
        this.std1 = new Person("hoa", 20);
        this.name = name;
        this.age = age;
    }
}
