// Constants (const) = a variable that can't be changed once assigned.
//                     Security measure to avoid abusers.


// Computes the circumference of a circle

// if constant, make the variable name UPPERCASE.

// PI (uppercase if const) = used in primitive data types (numbers, booleans) 
// pi (lowercase if const) = used in reference data types (strings)

const PI = 3.14159; // if "let", others may maliciously change the value like "pi = 420.69" or other values in the next lines.
let radius;

document.getElementById(`submitButton`).onclick = function(){

    window.alert(`Thank you! Please check the console! Right click -> Inspect -> Console`);

    radius = document.getElementById(`radiusInput`).value;

    console.log(`=== Input Received ===`);
    console.log(`Radius: ${radius}`);
    console.log(`Pi: ${PI}`);

    console.log(``);
    console.log(`==================================`);
    console.log(``);
    console.log(`Circumference = 2πr`);
    console.log(`Circumference = 2 * ${PI} * ${radius}`);

    let circumference = 2 * PI * radius;

    console.log(`Circumference = ` + circumference);

    document.getElementById(`solution`).textContent = `C = 2 * ${PI} * ${radius} = ${circumference}`;

    console.log(``);
    console.log(`==================================`);
    console.log(``);

    console.log(`Thank you so much!`);
}