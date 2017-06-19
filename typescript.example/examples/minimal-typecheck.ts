class Vehicle {
	wheels: number
}

class Car extends Vehicle { 
   engine: string
} 
 
var c: Car = new Car();
const x = c;

interface E {
	engine: string,
	wheels: number
}
var z: E = c;

//var x: Car = z;