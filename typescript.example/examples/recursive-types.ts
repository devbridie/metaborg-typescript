// Interfaces allow direct recursion
interface A {
  get: number,
  next: A
}

// Type aliasses do not, 
// ... unless the recursive reference is inside an object type:

// So this compiles:
interface B { get: number, next: B }

// But this is illegal because of the direct recursive reference:
// type Stream = [number,Stream]


function f(l: { get: number, next: { get: number, next: { get: number, next: A } } }) { }
function g(l: { get: number, next: { get: number, next: { get: number, next: B } } }) { }
function h(l: A) { }
function i(l: B) { }

var a: B;
var b: { get: number, next: B };
var c: A;
var d: { get: number, next: { get: number, next: { get: number, next: { get: number, next: A}}}}

// Since `a` can be applied to `f`, the types B and `{ get: number, next: ...` are compatible.
// All these types are compatible. They may have different names, but in the fixed point, 
// their fully expanded types are equal.
// This makes me think TypeScript is equi-recursive.
//   (Modulo the directly recursive case with type aliases, explained above)
f(a)
g(a)
h(a)
i(a)

f(b)
g(b)
h(b)
i(b)

f(c)
g(c)
h(c)
i(c)

f(d)
g(d)
h(d)
i(c)

