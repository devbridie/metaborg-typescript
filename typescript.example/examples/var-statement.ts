interface A {
    a: string;
}

interface B {
    b: string;
}

interface C {
	a: string;
	b: string;
}

const foo: C = { a: "", b: "", c: "" };
const baz: A = foo;
const boo: B = foo;