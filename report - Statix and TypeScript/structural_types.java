interface A {
    String z;
}

interface B {
    String z;
}

A a = {z: ""};
B b = {z: ""};
// type_equivalent(a, b) == false