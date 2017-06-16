const a = {
  foo: 5,
  bar: function(a: number) {
    return a;
  },
  baz: {
    
  }
}

interface b {
  foo: string
}

const nu: number = a.foo;
const nu2: number = a.bar(nu);
//const nu3 = a.baz.foo;
const value: b = a;