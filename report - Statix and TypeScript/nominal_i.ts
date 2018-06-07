interface Bar {
    x: string;
    y: number;
}

interface Foo {
    x: string;
    y: number;
}

let v: Bar = { x: "", y: 42 };
let w: Foo = v;