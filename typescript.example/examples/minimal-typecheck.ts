class Vehicle {
	wheels: number
	print(): string {
	 
	}
}

class Car extends Vehicle {
	engine: string
	bliep(): number {}
} 
 
var c: Car = new Car();
const x = c.wheels;

const s: string = c.print();

interface E {
	engine: string,
	bliep: any
}

var z: E = c;

//var x: Car = z;