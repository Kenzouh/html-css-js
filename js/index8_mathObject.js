//  Math (capital M) = built-in object that provides a collection of PROPERTIES and METHODS.


console.log(`===== Pi and Euler's Number =====`);
console.log(``);

// Pi and Euler's Number
console.log(`Math.PI = ` + Math.PI);
console.log(`Math.E = ` + Math.E);


// ====================================================================================================


console.log(``);
console.log(`======== Rounding Numbers ========`);
console.log(``);


// Rounding Numbers
let variableHolder;
let a = 3.50;
let b = 8.20;

variableHolder = Math.round(a); // round up or down
console.log(`Math.round(${a}) = ` + variableHolder);

variableHolder = Math.ceil(a); // round up all the time
console.log(`Math.ceil(${a}) = ` + variableHolder);

variableHolder = Math.floor(a); // round down all the time
console.log(`Math.floor(${a}) = ` + variableHolder);


console.log(``);


variableHolder = Math.round(b);
console.log(`Math.round(${b}) = ` + variableHolder);

variableHolder = Math.ceil(b);
console.log(`Math.ceil(${b}) = ` + variableHolder);

variableHolder = Math.floor(b);
console.log(`Math.floor(${b}) = ` + variableHolder);


// ====================================================================================================


console.log(``);
console.log(`==== Truncate and Power ====`);
console.log(``);

let c = 4.29;
let d = 8;
let e = 3;

variableHolder = Math.trunc(c); // Truncate: removes any decimal portion.
console.log(`Math.trunc(${c}) = ` + variableHolder);

variableHolder = Math.pow(d, e); // Giving a base to a given power.
console.log(`Math.pow(${d}, ${e}) = ` + variableHolder);

variableHolder = Math.pow(e, d);
console.log(`Math.pow(${e}, ${d}) = ` + variableHolder);


// ====================================================================================================


console.log(``);
console.log(`==== Square Root and Log ====`);
console.log(``);

let f = 81;
let g = 144;

variableHolder = Math.sqrt(f); // sqrt = Square Root
console.log(`Math.sqrt(${f}) = ` + variableHolder);

variableHolder = Math.sqrt(g);
console.log(`Math.sqrt(${g}) = ` + variableHolder);

variableHolder = Math.log(f); // log = Natural logarithm
console.log(`Math.log(${f}) = ` + variableHolder);

variableHolder = Math.log(g);
console.log(`Math.log(${g}) = ` + variableHolder);



// ====================================================================================================


console.log(``);
console.log(`======== Trigonometry ========`);
console.log(``);

let h = 25;

variableHolder = Math.sin(h); // Sine
console.log(`Math.sin(${h}) = ` + variableHolder);

variableHolder = Math.cos(h); // Cosine
console.log(`Math.cos(${h}) = ` + variableHolder);

variableHolder = Math.tan(h); // Tangent
console.log(`Math.tan(${h}) = ` + variableHolder);


// ====================================================================================================


console.log(``);
console.log(`===== Absolute Value and Sign =====`);
console.log(``);


let i = 5.25;
let j = -10.80;
let k = 0;


variableHolder = Math.abs(i); // absolute value function = eliminates the negative sign
console.log(`Math.abs(${i}) = ` + variableHolder);

variableHolder = Math.abs(j);
console.log(`Math.abs(${j}) = ` + variableHolder);

console.log(``);

variableHolder = Math.sign(i);
console.log(`Math.sign(${i}) = ` + variableHolder);

variableHolder = Math.sign(j);
console.log(`Math.sign(${j}) = ` + variableHolder);

variableHolder = Math.sign(k);
console.log(`Math.sign(${k}) = ` + variableHolder);


// ====================================================================================================


console.log(``);
console.log(`===== Min and Max Value =====`);
console.log(``);

let l = 18;
let m = 15;
let n = -3;

variableHolder = Math.min(l, m, n);
console.log(`Math.min(${l}, ${m}, ${n}) = ` + variableHolder);

variableHolder = Math.max(l, m, n);
console.log(`Math.max(${l}, ${m}, ${n}) = ` + variableHolder);

let o = 525;
let p = 428;
let q = 888;

variableHolder = Math.min(o, p, q);
console.log(`Math.min(${o}, ${p}, ${q}) = ` + variableHolder);

variableHolder = Math.max(o, p, q);
console.log(`Math.max(${o}, ${p}, ${q}) = ` + variableHolder);