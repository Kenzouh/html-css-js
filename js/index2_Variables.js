/*
    Variable =  container that stores a value.
                Behaves as if it were the value it contains.
    
    2 steps in creating a variable:            
        1. declaration  =   let x;
        2. assignment   =   x = 100;

    Data Types:
        1. Number
        2. String
        3. Boolean
*/

window.alert(`Check the console: right-click the website -> Inspect -> Console`);


// ======================================== NUMBER | INTEGER ========================================

let x; // Declaration. Once declared, you don't have to declare it again.
x = 988; // Assignment

let y = 321; // Declaration & Assignment

console.log(typeof x); // If you want to display the data type of the variable.
console.log(x);
console.log(y);
console.log(`========================================`);

// ======================================== STRING  ========================================

let surname1 = `Takada (高田)`;
let surname2 = `Terada (寺田)`;
let surname3 = `Harada (原田)`;
let rick = `Rick123`;

console.log(typeof surname1);
console.log(surname1);
console.log(surname2);
console.log(surname3);
console.log(rick);
console.log(`========================================`);

// ======================================== BOOLEAN ========================================

// Booleans = not really used for outputs, but used with IF STATEMENTS.

let cat = true;
let norwegianForest = true;
let alive = true;
let fat = false;
let cute = true;
let energetic = false;
let lazy = true;

console.log(typeof cat);
console.log(`Your pet is a cat      :   ${cat}`);   
console.log(`Norwegian Forest Cat   :   ${norwegianForest}`);
console.log(`Is alive               :   ${alive}`);
console.log(`Is fat                 :   ${fat}`);
console.log(`Is cute                :   ${cute}`);
console.log(`Is energetic           :   ${energetic}`);
console.log(`Is lazy                :   ${lazy}`);
console.log(`========================================`);

// ======================================== WEBSITE FRONT-END ========================================

document.getElementById(`title`).textContent = `JavaScript Practice #2`;
document.getElementById(`subtitle`).textContent = `(JavaScript Variables)`;

let username = `Kenzo`;
let course = `BSIT`;
let dream = 'Web Developer';

document.getElementById(`p1`).textContent = `Hi! My name is ${username}.`;
document.getElementById(`p2`).textContent = `My course is "${course}".`;
document.getElementById(`p3`).textContent = `My dream is to be a ${dream}.`;
document.getElementById(`p4`).textContent = `Nice to meet you! ヾ( ^ w ^)`;