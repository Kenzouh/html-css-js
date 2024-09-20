// ======================================== Left Side 1 ========================================

const mangaTextBox = document.getElementById("mangaTextBox");
const LS1_submitButton = document.getElementById("LS1_submitButton");
const LS1_response = document.getElementById("LS1_response");

let mangaAnswer;

LS1_submitButton.onclick = function(){

    console.log("==== Answer Submitted ====");
    console.log("");

    mangaAnswer = mangaTextBox.value;
    mangaAnswer = Number(mangaAnswer);

    // Condition
    if(mangaAnswer == 1){ // If keyword

        // Code block
        console.log("You read manga! :D");
        LS1_response.textContent = `You read manga! :D`; 
    }
    // Comparison operator (==) | Assignment operator (=)
    else if(mangaAnswer == 0){
        console.log("You don't read manga! :D");
        LS1_response.textContent = `You don't read manga! :D`;
    }
    else{ // else clause
        console.log("I'll assume you don't read manga. :)");
        LS1_response.textContent = `I'll assume you don't read manga. :)`; // Backticks are used for template literals 
                                                                           // which are mostly used when inserting a variable ${var}.
    }

    console.log("");
}

// ======================================== Right Side 1 ========================================

const timeTextBox = document.getElementById("timeTextBox");
const RS1_submitButton = document.getElementById("RS1_submitButton");
const RS1_response1 = document.getElementById("RS1_response1");
const RS1_response2 = document.getElementById("RS1_response2");

let time;


RS1_submitButton.onclick = function(){

    console.log("==== Answer Submitted ====");
    console.log("");

    time = timeTextBox.value;
    time = Number(time);

//  if clause 
    if(time == 0 || time == 24){

        console.log("Time check: 12 AM.");
        console.log("It's midnight! Sleep tight!");

        RS1_response1.textContent = `Time check: 12 AM.`;
        RS1_response2.textContent = `It's midnight! Sleep tight!`;
    }

    // You can add as many else if statements as you like.
    else if(time <= 5){

        console.log("Time check: " + time + " AM.");
        console.log("It's early morning! You should still be asleep.");

        RS1_response1.textContent = `Time check: ${time} AM.`;
        RS1_response2.textContent = `It's early morning! You should still be asleep.`;
    }

    else if(time <= 11){

        console.log("Time check: " + time + " AM.");
        console.log("Good morning! :)");

        RS1_response1.textContent = `Time check: ${time} AM.`;
        RS1_response2.textContent = `Good morning! :)`;
    }

    else if(time == 12){

        console.log("Time check: " + time + " PM.");
        console.log("It's noon!");

        RS1_response1.textContent = `Time check: ${time} PM.`;
        RS1_response2.textContent = `It's noon!`;
    }

    else if(time <= 17){ // Nested If Statement
        
        if(time == 13){
            console.log("Time check: 1 PM.");
            RS1_response1.textContent = `Time check: 1 PM.`;
        }

        else if(time == 14){
            console.log("Time check: 2 PM.");
            RS1_response1.textContent = `Time check: 2 PM.`;
        }

        else if(time == 15){
            console.log("Time check: 3 PM.");
            RS1_response1.textContent  = `Time check: 3 PM.`;
        }

        else if(time == 16){
            console.log("Time check: 4 PM.");
            RS1_response1.textContent = `Time check: 4 PM.`;
        }

        else{
            console.log("Time check: 5 PM.");
            RS1_response1.textContent = `Time check: 5 PM.`;
        }

        console.log("Good afternoon!");
        RS1_response2.textContent = `Good afternoon!`;
    }

    else if(time <= 20){

        if(time == 18){
            console.log("Time check: 6 PM.");
            RS1_response1.textContent = `Time check: 6 PM.`;
        }
        
        else if(time == 19){
            console.log("Time check: 7 PM.");
            RS1_response1.textContent = `Time check: 7 PM.`;
        }
        else{
            console.log("Time check: 8 PM.");
            RS1_response1.textContent = `Time check: 8 PM.`;
        }

        console.log("Good evening!");
        RS1_response2.textContent = `Good evening!`;
    }

    else if (time <= 23){

        if(time == 21){
            console.log("Time check: 9 PM.");
            RS1_response1.textContent = `Time check: 9 PM.`;
        }
        else if(time == 22){
            console.log("Time check: 10 PM.");
            RS1_response1.textContent = `Time check: 10 PM.`;
        }
        else{
            console.log("Time check: 11 PM.");
            RS1_response1.textContent = `Time check: 11 PM.`;
        }

        console.log("Good night! ^-^");
        RS1_response2.textContent = `Good night! ^-^`;
    }

    else{
        console.log("Please enter a number between 0–24 (no decimal points).");

        RS1_response1.textContent = `Please, enter a number between 0–24 (no decimal points).`;
        RS1_response2.textContent = `Thank you!`;
    }

    console.log("");
}


// ======================================== Random Stuff with Boolean Values ========================================

let isMartian = false; // Boolean values

console.log("==== Random Stuff with Boolean Values ====");
console.log("");

if(isMartian){ // Condition itself since boolean value.
    console.log("You're from Mars!");
}
else{
    console.log("You're from the earth!");
}

// ================================

console.log("");

let isHuman = true;
let isHealthy = true;

if(isHuman){
    console.log("You're a human.");

    if(isHealthy){
        console.log("You're healthy.");
    }
    else{
        console.log("You're not healthy.");
    }
}
else{
    console.log("You're not a human.");
}

console.log("");