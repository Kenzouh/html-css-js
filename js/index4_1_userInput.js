/*
    Ways in accepting user-input:
        1. Easy way = window prompt
        2. Professional way = HTML textbox
*/


// Easy way.
let feeling = window.prompt(`Hi! How are you feeling today?`);
console.log(`You are feeling: ${feeling}`);


// Pro way.
let username;
                    // submit button ID
document.getElementById(`submit`).onclick = function(){ // When the button gets clicked, do...
    username = document.getElementById(`userInput`).value; // value of the textbox

    console.log(`== Input submitted ==`);
    console.log(`Username: ${username}`);
                                                // Template literal
    document.getElementById(`welcome`).textContent = `Nice to meet you, ${username}! `;
    document.getElementById(`note`).textContent = `(˶˃ ᵕ ˂˶)/ 💞`;

    window.alert(`Check the console: Right-click -> Inspect -> Console`);
    console.log(`Thank you so much for your time, ${username}!`);
    console.log(`2 cookies for you! 🍪⸜(^ ᵕ ^)⸝🍪`);
}