
class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello ${this.name}, Welcome to the Classes`);
    }
}

class Employee extends Person{
    designation;

    constructor(name, age, designation){
        super(name, age);
        this.designation = designation;
    }

    displayDetails(){
        console.log('Name:', this.name);
        console.log('Age:', this.age);
        console.log('Designation:', this.designation);
    }
}

let user = new Employee('Ashish', 26, 'Software Developer');

user.greet();
user.displayDetails();