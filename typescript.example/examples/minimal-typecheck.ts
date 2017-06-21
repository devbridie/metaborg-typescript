class Vehicle {
	wheels: number
	print(): string {
	  return "I have wheels";
	}
}


class Car extends Vehicle {
	engine: string
	bliep(): number { return 42; }
}

//const some: Car = undefined;
const wrong: string = new Car();

var a = Car;
var c: Car = new a();
const b = c.wheels;

const s: string = c.print(); 

interface E {
	engine: string,
	bliep: any
}

var q = Car;
var z: E = c;

var x: Car = z;