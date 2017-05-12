let a = 3;
const b = 3;
const c = 5;


interface foo {
  bar: {
    foo: string,
  }
}

interface A {
  next?: B
}
interface B {
  next?: A
}
// A == B?

const number = 5;

function foo(a: void) {
  return a;
}

function bar() {
  return function() {
    return function(a: number) {

    };
  };
};

bar()()(5);

foo("asdf");
