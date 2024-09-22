// Switch Case = substitute for multiple IF ELSE STATEMENTS.

const AL_textBox = document.getElementById("AL_textBox");
const AL_submitBtn = document.getElementById("AL_submitBtn");
const AL_result = document.getElementById("AL_result");

let AL_answer;


AL_submitBtn.onclick = function(){

    AL_answer = AL_textBox.value;
    AL_answer = Number(AL_answer);


    // Variable or a value should be placed in.
    switch(AL_answer){

        //   Value or condition.
        case 1:
            AL_result.textContent = `(${AL_answer}): January ☃️`;
            break;

        case 2:
            AL_result.textContent = `(${AL_answer}): February 🍫🥰💘`;
            break;

        case 3:
            AL_result.textContent = `(${AL_answer}): March 🍀`;
            break;

        case 4:
            AL_result.textContent = `(${AL_answer}): April 🤡`;
            break;

        case 5:
            AL_result.textContent = `(${AL_answer}): May 💐🌸`;
            break;

        case 6:
            AL_result.textContent = `(${AL_answer}): June 🌦️`;
            break;

        case 7:
            AL_result.textContent = `(${AL_answer}): July ⛈️`;
            break;

        case 8:
            AL_result.textContent = `(${AL_answer}): August 🌈`;
            break;

        case 9:
            AL_result.textContent = `(${AL_answer}): September 🍎`;
            break;

        case 10:
            AL_result.textContent = `(${AL_answer}): October 🎃`;
            break;

        case 11:
            AL_result.textContent = `(${AL_answer}): November 🍂`;
            break;

        case 12:
            AL_result.textContent = `(${AL_answer}): December 🎄🎅`;
            break;

        default:
            AL_result.textContent = `That's not a month. :)`;
    }
}


/*==================== Right Side ====================*/


const AR_textBox = document.getElementById("AR_textBox");
const AR_submitBtn = document.getElementById("AR_submitBtn");
const AR_result = document.getElementById("AR_result");

let AR_answer;

AR_submitBtn.onclick = function(){

    AR_answer = AR_textBox.value;
    AR_answer = Number(AR_answer);

    //    true = examines the value of true against matching cases which contain a condition.
    switch(true){


        // Ordering of conditions matter.

        case AR_answer >= 15: // if true, we run this code. If false, we go downwards until we match something.
            AR_result.textContent = `I hope you still wake up at this point... 🫥`;
            break;

        case AR_answer >= 13:
            AR_result.textContent = `You're Sleeping Beauty! 💅✨`;
            break;

        case AR_answer == 12:
            AR_result.textContent = `You slept for half a day. 😭`;
            break;

        case AR_answer >= 9:
            AR_result.textContent = `You're taking a slumber! 😴💤`;
            break;

        case AR_answer == 8:
            AR_result.textContent = `Perfect sleep! 😊`;
            break;

        case AR_answer >= 6:
            AR_result.textContent = `Getting closer to 8 hours of sleep. ✊`;
            break;

        case AR_answer >= 4:
            AR_result.textContent = `That's not enough. 😔`;
            break;
            
        case AR_answer >= 1:
            AR_result.textContent = `Too short! 😫`;
            break;

        case AR_answer == 0:
            AR_result.textContent = `Go to sleep. 🥲`;
            break;

        default:
            AR_result.textContent = `Enter how many hours, silly. 🙂`;
    }
}