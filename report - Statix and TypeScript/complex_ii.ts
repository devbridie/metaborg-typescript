interface A {
    a: string;
}

interface B {
    b: string;
}

interface C extends A, B {

}

const a: A = {a: ""};
const b: B = {b: ""};
const c: C = { a: "", b: "" };