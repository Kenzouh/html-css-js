
const incrementTextbox1 = document.getElementById("incrementTextbox1");
const incrementSubmitBtn1 = document.getElementById("incrementSubmitBtn1");
const AL1_note = document.getElementById("AL1_note");
let i1;

const decrementTextbox1 = document.getElementById("decrementTextbox1");
const decrementSubmitBtn1 = document.getElementById("decrementSubmitBtn1");
const AR1_note = document.getElementById("AR1_note");
let i2;


incrementSubmitBtn1.onclick = function(){
    
    //   parseInt() = changes string to int.
    i1 = parseInt(incrementTextbox1.value);

    if(!isNaN(i1) && i1 > 0){// Checks if the value is a POSITIVE NUMBER and nothing else.
        AL1_note.textContent = ""; // Clears the previous input, so if you input again, it won't overlap.

        for(let i = 1; i <= i1; i++){
            AL1_note.textContent += `${i} `; // Concatenate the numbers with a space.
        }    
    }

    else{
        AL1_note.textContent = "Please enter a positive number ONLY. Thank you! :)";
    }

}


/*

incrementSubmitBtn1.onclick = function() {
    i1 = parseInt(incrementTextbox1.value); // Convert input to a number

    if (!isNaN(i1) && i1 >= 0) { // Check if i1 is a valid non-negative number
        AL1_note.textContent = ""; // Clear previous output
        let current = 0; // Start from 0

        // Use setInterval to incrementally update the display
        const interval = setInterval(function() {
            AL1_note.textContent = `${current}`;
            
            if (current >= i1) { // Stop when we reach the target number
                clearInterval(interval);
            }
            
            current++; // Increment for the next cycle
        }, 500); // 500ms delay between updates (adjust as needed)
    } else {
        AL1_note.textContent = "Please enter a valid positive number.";
    }
};

*/



/* 
incrementSubmitBtn1.onclick = function() {
    i1 = parseInt(incrementTextbox1.value); // Convert input to a number

    if (!isNaN(i1)) { // Check if i1 is a valid number
        AL1_note.textContent = ""; // Clear previous output

        for (let i = 0; i <= i1; i++) {
            AL1_note.textContent = `${i}`; // This will show the last value, i1
        }
    } else {
        AL1_note.textContent = "Please enter a valid number.";
    }
};
*/

/*
const decrementTextbox1 = document.getElementById("decrementTextbox1");
const decrementSubmitBtn1 = document.getElementById("decrementSubmitBtn1");
const AR1_note = document.getElementById("AR1_note");
let i2;
*/

decrementSubmitBtn1.onclick = function(){

    i2 = parseInt(decrementTextbox1.value);

    if(!isNaN(i2) && i2 < 100){
        AR1_note.textContent = "";

        for(let i = 99; i >= i2; i--){
            AR1_note.textContent += `${i} `;
        }
    }

    else{
        AR1_note.textContent = "Please, enter a number below 100. Thank you! :)";
    }
}

// ===============================================================================================



console.log("for(let i = 0; i <= 10; i++)");
console.log("");

for(let i = 0; i <= 10; i++){
    console.log(`i = ${i}`);
}

console.log("");
console.log("for(let i = 10; i >= 0; i--)");
console.log("");

for(let i = 10; i >= 0; i--){
    console.log(`i = ${i}`);
}

