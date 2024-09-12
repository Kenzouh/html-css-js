/*
    Arithmetic Operators = operands (values, variables, etc.)
                           operators (+ - * / ** %)
                                              ** = read as "to the power"
                                              %  = helps in checking even or odd numbers.
                           ex. 21 = x + 8;
*/








// ====================================== Arithmetic Operators ======================================

console.log(`========= Arithmetic Operators =========`);

let money = 200;

console.log(`Money: $200`);


console.log(`Addition: ${money} + 5000`);
let sum = money + 5000;
console.log(sum);


console.log(`Subtraction: ${money} - 150`);
let difference = money - 150;
console.log(difference);


console.log(`Multiplication: ${money} * 40`);
let product = money * 40;
console.log(product);


console.log(`Division: ${money} / 8`);
let quotient = money / 8;
console.log(quotient);


console.log(`Exponential: ${money} ** 3`);
let power = money **3;
console.log(power);


console.log(`Modulus: ${money} % 13`);
let remainder = money % 13; // If using the modulus operator, make a separate variable.
console.log(remainder);





// ====================================== Augmented Operators ======================================

// Augmented Operators = short cut. Reassigns values.
console.log(`========= Augmented Operators =========`);

let calories = 50;

console.log(`Calories: ${calories}`);

calories += 20;
console.log(`calories += 20`);
console.log(calories);



calories -= 30;
console.log(`calories -= 30`);
console.log(calories);


calories *= 4;
console.log(`calories *= 4`);
console.log(calories);

calories /= 5;
console.log(`calories /= 5`);
console.log(calories);


calories %= 3;
console.log(`calories %= 3`);
console.log(calories);

calories **= 4;
console.log(`calories **= 4`);
console.log(calories);

// ====================================== Increment/Decrement Operators ======================================

console.log(`==== Increment/Decrement Operators ====`);

let homework = 5;

console.log(`Homework: ${homework}`);


console.log(`homework++ -> ${homework++}`);
console.log(`homework-- -> ${homework--}`);

console.log(`homework   -> ${homework}`);

console.log(`--homework -> ${--homework}`);
console.log(`--homework -> ${--homework}`);
console.log(`--homework -> ${--homework}`);

console.log(`++homework -> ${++homework}`);
console.log(`++homework -> ${++homework}`);

// ====================================== Operator Precedence ======================================

console.log(`========= Operator Precedence =========`);

/*
    Operator Precedence:
    1. Parenthesis ()
    2. Exponents
    3. Multiplication & Division & Modulo
    4. Addition & Subtraction
*/

let operator1 =  23 + 43 ** (5 - 3);
//               23 + 43 **    2
//               23 + 1849
//               1872

console.log(`23 + 43 ** (5 - 3)`);
console.log(operator1);


let operator2 = 83 - 25 / 5 / 5;
//              83 -    5   / 5
//              83 - 1
//              82

console.log(`83 - 25 / 5 / 5`);
console.log(operator2);
