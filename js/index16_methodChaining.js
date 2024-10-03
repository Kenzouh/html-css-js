// Method Chaining = Calling multiple methods in one line of code.

// =============== Without Method Chaining ===============


const asd1_textBox = document.getElementById("asd1_textBox");
const asd1_btn = document.getElementById("asd1_btn");
const asd1_result = document.getElementById("asd1_result");

let asd1_answer;


asd1_btn.onclick = function(){

    // No method chaining = longer process

    asd1_answer = asd1_textBox.value;
    
    asd1_answer = asd1_answer.trim(); // Removes the white space before.

    let firstChar = asd1_answer.charAt(0);
    firstChar = firstChar.toUpperCase();

    let nextLetters = asd1_answer.slice(1);
    nextLetters = nextLetters.toLowerCase();

    asd1_answer = firstChar + nextLetters;


    asd1_result.textContent = `${asd1_answer}! 🐼`;
}


// =============== With Method Chaining ===============


const asd2_textBox = document.getElementById("asd2_textBox");
const asd2_btn = document.getElementById("asd2_btn");
const asd2_result = document.getElementById("asd2_result");

let asd2_answer;

asd2_btn.onclick = function(){

    
    asd2_answer = asd2_textBox.value;

    // Shortcut and no more extra variables.
    // May be harder to read if too many methods.
    // Useful in Object-Oriented Programming (OOP)

                                                    // .trim() = removes the first character which we extracted on the first .trim(). 
                                                    //           This helps in preventing first character duplication.
    asd2_answer = asd2_answer.trim().charAt(0).toUpperCase() + asd2_answer.trim().slice(1).toLowerCase();

    
    asd2_result.textContent =  `${asd2_answer}! 😸`;
}



// =============== With Method Chaining ===============



const asd3_textBox = document.getElementById("asd3_textBox");
const asd3_btn = document.getElementById("asd3_btn");
const asd3_result = document.getElementById("asd3_result");

let asd3_answer = asd2_textBox.value;

asd3_btn.onclick = function(){

    asd3_answer = asd3_textBox.value;

                                //  . = the period helps you in adding more methods.
                                                    // + = concatenation because we're combining the first letter (capitalized)
                                                    //     with the next letters (lowercase).

    asd3_answer = asd3_answer.trim().charAt(0).toUpperCase() +  asd3_answer.trim().slice(1).toLowerCase();

    asd3_result.textContent = `${asd3_answer}! 🐶`
}