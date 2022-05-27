"use strict";
// Definition Interface
// Diving into interface **A very important concept that needs to be covered**
// in its simplest version an interface describes the structure of an object we can use to describe how our object should look like
// An interface can't have an initializer
// it allows us to define structure of an object
// we can use this as a type to typecheck for objects that must have this structure
// but we can replace interface with type just have to add the '=' sign this will be the same with no errors
// why do we have an interface then ?
// when you define an interface its super clear that you want to define the structure of object with that.
// you more often see interfaces than you see custom types
// an interface can be used as a contract a class can implement and a class then have to adhere to
// Interfaces are often used to share functionality amongst different classes not regarding their concrete implementation
// abstract class and interface is different because you have to overwrite method and also you have concrete implementation in the class
// you have to setup the conditions defined by an interface
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 24;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name)
            console.log(phrase + " " + this.name);
        else
            console.log("Hi!");
    }
}
// we can use our interface as a type
let user1; //it means we must have to have the properties of Person interface in this object
user1 = new Person();
user1.greet("Hi there - I am");
console.log(user1);
//# sourceMappingURL=app.js.map