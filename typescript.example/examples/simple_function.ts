function foo(a: number): number {
  return a;
}

foo(5);

interface obj {
  foo: string;
  bar: number;
}

function bar(b: obj) {
}

bar({
  foo: "asdf",
  bar: 5
});