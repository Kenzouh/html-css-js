// Logical Operators = combines/manipulate boolean values.

//  AND operator = &&
//  OR operator  = ||
//  NOT operator = !

const AL_textbox = document.getElementById("AL_textbox");
const AL_submitBtn = document.getElementById("AL_submitBtn");
const AL_output = document.getElementById("AL_output");

let AL_answer;


AL_submitBtn.onclick = function(){

    AL_answer = AL_textbox.value;
    // Try making a switch case version of this.


    switch(true){

        case AL_answer == "":
            AL_output.textContent = `Please, don't leave it blank.`;
            break;

        case AL_answer > 100:
            AL_output.textContent = `${AL_answer} is beyond the grading system. Answer 0–100 only.`;
            break;

        case AL_answer <= 100 && AL_answer >= 97:
            AL_output.textContent = `${AL_answer} = 1.00`;
            break;

        case AL_answer <= 96 && AL_answer >= 94:
            AL_output.textContent = `${AL_answer} = 1.25`;
            break;

        case AL_answer <= 93 && AL_answer >= 91:
            AL_output.textContent = `${AL_answer} = 1.50`;
            break;

        case AL_answer <= 90 && AL_answer >= 88:
            AL_output.textContent = `${AL_answer} = 1.75`;
            break;

        case AL_answer <= 87 && AL_answer >= 85:
            AL_output.textContent = `${AL_answer} = 2.00`;
            break;

        case AL_answer <= 84 && AL_answer >= 82:
            AL_output.textContent = `${AL_answer} = 2.25`;
            break;
        
        case AL_answer <= 81 && AL_answer >= 79:
            AL_output.textContent = `${AL_answer} = 2.50`;
            break;

        case AL_answer <= 78 && AL_answer >= 76:
            AL_output.textContent = `${AL_answer} = 2.75`;
            break;
        
        case AL_answer == 75:
            AL_output.textContent = `${AL_answer} = 3.00`;
            break;

        case AL_answer <= 74 && AL_answer >= 65:
            AL_output.textContent = `${AL_answer} = 5.00`;
            break;

        case AL_answer == "I" || AL_answer == "i":
            AL_output.textContent = `${AL_answer} = Incomplete.`;
            break;

        case AL_answer == "W" || AL_answer == "w":
            AL_output.textContent = `${AL_answer} = Withdrawn.`;
            break;

        case AL_answer == "D" || AL_answer == "d":
            AL_output.textContent = `${AL_answer} = Dropped.`;
            break;

        default:
            AL_output.textContent = `You failed. :(`;
            break;
    }
    /*
    if(AL_answer <= 100 && AL_answer >= 97){
        AL_output.textContent = `${AL_answer} = 1.00`;
    }

    else if(AL_answer <= 96 && AL_answer >= 94){
        AL_output.textContent = `${AL_answer} = 1.25`;
    }

    else if(AL_answer <= 93 && AL_answer >= 91){
        AL_output.textContent = `${AL_answer} = 1.50`;
    }

    else if(AL_answer <= 90 && AL_answer >= 88){
        AL_output.textContent = `${AL_answer} = 1.75`;
    }

    else if(AL_answer <= 87 && AL_answer >= 85){
        AL_output.textContent = `${AL_answer} = 2.00`;
    }

    else if(AL_answer <= 84 && AL_answer >= 82){
        AL_output.textContent = `${AL_answer} = 2.25`;
    }

    else if(AL_answer <= 81 && AL_answer >= 79){
        AL_output.textContent = `${AL_answer} = 2.50`;
    }

    else if(AL_answer <= 78 && AL_answer >= 76){
        AL_output.textContent = `${AL_answer} = 2.75`;
    }

    else if(AL_answer == 75){
        AL_output.textContent = `${AL_answer} = 3.00`;
    }

    else if(AL_answer <= 74 && AL_answer >= 65){
        AL_output.textContent = `${AL_answer} = 5.00`;
    }


    else{
        AL_output.textContent = `You failed. :(`;
    }
    */
}


const AR_textbox = document.getElementById("AR_textbox");
const AR_submitBtn = document.getElementById("AR_submitBtn");
const AR_output = document.getElementById("AR_output");

let AR_answer;


AR_submitBtn.onclick = function(){

    AR_answer = AR_textbox.value;

    if(AR_answer == "Y" || AR_answer == "y"){
        AR_output.textContent = `You have enough sleep! :D`;
    }
    
    else if(AR_answer == "N" || AR_answer == "n"){
        AR_output.textContent = `You don't sleep that long. :(`;
    }

    else if(AR_answer == ""){
        AR_output.textContent = `Please, don't leave it blank.`;
    }

    else{
        AR_output.textContent = `Please type [Y] or [N] only. Thank you! :)`;
    }
}