interface A {
    z: string;
}

interface B {
    z: string;
}

let a: A = {z: ""};
let b: B = {z: ""};
// type_equivalent(a, b) == true