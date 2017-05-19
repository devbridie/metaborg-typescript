// Interfaces allow direct recursion
interface A {
  get: Number
  next: A
}

// Type aliasses do not, 
// ... unless the recursive reference is inside an object type:

// So this compiles:
type B = { get: Number, next: B }

// But this is illegal because of the direct recursive reference:
// type C = Number | C


function f(l: { get: Number, next: { get: Number, next: { get: Number, next: A } } }) { }
function g(l: { get: Number, next: { get: Number, next: { get: Number, next: B } } }) { }
function h(l: A) { }
function i(l: B) { }

var a: B;
var b: { get: Number, next: B };
var c: A;
var d: { get: Number, next: { get: Number, next: { get: Number, next: { get: Number, next: A}}}}

// Since `a` can be applied to `f`, the types B and `{ get: Number, next: ...` are compatible.
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

