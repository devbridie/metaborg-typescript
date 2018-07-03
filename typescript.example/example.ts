let x: number | string = 42;

type A = {
  x: number,
  z: boolean
};

type B = {
  y: string,
  z: boolean
};

type C = A | B;

let c: C = {
  w: 42, // Error
  x: 42,
  y: "LOL",
  z: false
};