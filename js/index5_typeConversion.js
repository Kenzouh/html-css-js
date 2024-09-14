/*
Type Conversion = change the datatype of a value to another.

    Ex.: Strings -> Int
         Strings -> Boolean
         Int     -> Strings
         Int     -> Boolean

     When accepting user-input, it's a STRING by default.
*/

console.log(`== Integer = 50 ==`);

let a = 50;
let b = 50;
let c = 50;

a = Number(a); // Number function.
b = String(b); // String function.
c = Boolean(c); // Boolean function.

console.log(`Int -> Int: `, a, typeof a);
console.log(`Int -> String: `, b, typeof b);
console.log(`Int -> Boolean: `, c, typeof c);

// ===========================================================================

console.log(``);
console.log(`== String "30"==`);

let d = "30";
let e = "30";
let f = "30";

d = Number(d);
e = String(e);
f = Boolean(f);

console.log(`String -> Int: `, d, typeof d);
console.log(`String -> String: `, e, typeof e);
console.log(`String -> Boolean: `, f, typeof f);

// ===========================================================================

console.log(``);
console.log(`== String "Hi!"==`);

let g = "Hi!";
let h = "Hi!";
let i = "Hi!";

g = Number(g);
h = String(h);
i = Boolean(i);

console.log(`String -> Int: `, g, typeof g); // NaN = Not a Number
console.log(`String -> String: `, h, typeof h);
console.log(`String -> Boolean: `, i, typeof i);

// ===========================================================================

console.log(``);
console.log(`== Empty Value ==`);

let j = "";
let k = "";
let l = "";

j = Number(j);
k = String(k);
l = Boolean(l);

console.log(`"" -> Int: `, j, typeof j);
console.log(`"" -> String: `, k, typeof k);
console.log(`"" -> Boolean: `, l, typeof l); // False = no value/empty. This can be useful when
                                             //         checking if the user inputted something.

// ===========================================================================

console.log(``);
console.log(`== Undefined Variable ==`);

let m;
let n;
let o;

m = Number(m);
n = String(n);
o = Boolean(o);

console.log(`  -> Int: `, m, typeof m); // NaN = Not a Number.
console.log(` -> String: `, n, typeof n); // Undefined = because no value.
console.log(` -> Boolean: `, o, typeof o); // false = no value.

// ===========================================================================

console.log(``);
console.log(`== Undefined Variable with no Type Conversion ==`);

let p;
let q;
let r;

console.log(p, typeof p);
console.log(q, typeof q);
console.log(r, typeof r);