

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

let user = new Person('Ashish', 26);

user.greet();