/*JavaScript = creates DYNAMIC and INTERACTIVE web pages. 
               It runs on web browsers (Google Chrome, Mozilla FireFox, MS Edge, IE)*/


// Outputs texts: you can use "double quotes" or 'single quotes' or `backticks`
// backticks (``): template literal. Helping in inserting VARIABLES.


//Basic Output
console.log(`Hello!`); // Right click the webpage, click "inspect", click "Console"
console.log(`Welcome to my JavaScript code!`);
console.log(`First time coding in JavaScript.`);

console.log(`===============================================`);
console.log(`Never gonna give you up`);
console.log(`Never gonna let you down`);
console.log(`Never gonna run around and desert you!`);
console.log(`Never gonna make you cry`);
console.log(`Never gonna say goodbye`);
console.log(`Never gonna tell a lie and hurt you`);
console.log(`===============================================`);


//Alert box (pop-up window)
window.alert(`Alert Pop-Up!`);
window.alert(`1st JavaScript code.`);


// Changes a text content of an HTML element.
document.getElementById(`title`).textContent = `JavaScript Practice`;
document.getElementById(`description`).textContent = `using console.log, window.alert 
                                                      and document.getElementById.`;

document.getElementById(`listTitle`).textContent = `Checking the Console`;
document.getElementById(`num1`).textContent = `Right-click the website.`;
document.getElementById(`num2`).textContent = `Click "Inspect"`;
document.getElementById(`num3`).textContent = `Click "Console"`;
document.getElementById(`num4`).textContent = `Read the contents of the console.`;


//Single-line comment


/*
    Multi-line 
    comment
*/