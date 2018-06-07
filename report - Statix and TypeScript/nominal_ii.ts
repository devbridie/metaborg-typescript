interface Bar {
    x: string;
    y: number;
}

interface Foo {
    x: string;
    y: number;
}

function doSomething(val: Bar) {
    
}

let v: Bar = { x: "LOL", y: 42 };
let w: Foo = v;
doSomething(w);