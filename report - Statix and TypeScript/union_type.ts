let z: number | string = 42;
z = "";

interface A {
	x: number;
	y: string;
}

interface B {
	y: string;
	z: boolean;
}

type C = A | B;

let a: A = {x: 42, y: ""};
let b: B = {y: "", z: false};

