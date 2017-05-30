function foo(a: number) {
  const foo = 5;
  return a;
}

function baz() {
  if (true) {
    if (false) {
      return 5;
    }
    return 3;
  }

  return 0;
}

const f = foo(5);

interface obj {
  foo: string;
  bar: number;
}

function bar(b: obj) {
  return;
}

bar({
  foo: "asdf",
  bar: 5
});