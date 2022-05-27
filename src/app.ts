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

// interface extends will force us to have both of the interface's values should be defined
// in interfaces you can inherit from multiple interfaces but you cannot do that in classes

// you can also define optional properties in interfaces

// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name?: string;
	outputName?: string; //optional property

	// greet?(): void;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable, Named {
	name?: string;
	age = 24;
	constructor(n?: string) {
		if (n) this.name = n;
	}

	greet(phrase: string) {
		if (this.name) console.log(phrase + " " + this.name);
		else console.log("Hi!");
	}
}
// we can use our interface as a type
let user1: Person; //it means we must have to have the properties of Person interface in this object

user1 = new Person();

user1.greet("Hi there - I am");
console.log(user1);
