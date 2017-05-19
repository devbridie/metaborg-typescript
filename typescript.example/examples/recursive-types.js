// But this is illegal because of the direct recursive reference:
// type Stream = [number,Stream]
function f(l) { }
function g(l) { }
function h(l) { }
function i(l) { }
var a;
var b;
var c;
var d;
// Since `a` can be applied to `f`, the types B and `{ get: number, next: ...` are compatible.
// All these types are compatible. They may have different names, but in the fixed point, 
// their fully expanded types are equal.
// This makes me think TypeScript is equi-recursive.
//   (Modulo the directly recursive case with type aliases, explained above)
f(a);
g(a);
h(a);
i(a);
f(b);
g(b);
h(b);
i(b);
f(c);
g(c);
h(c);
i(c);
f(d);
g(d);
h(d);
i(c);
