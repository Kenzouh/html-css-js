const userNameTextBox = document.getElementById("userNameTextBox");
const AL_submitBtn = document.getElementById("AL_submitBtn");

const AL_reply = document.getElementById("AL_reply"); 

const upperCaseBtn = document.getElementById("upperCaseBtn");
const lowerCaseBtn = document.getElementById("lowerCaseBtn");
const repeatBtnX2 = document.getElementById("repeatBtnX2");
const padStartBtn = document.getElementById("padStartBtn");
const padEndBtn = document.getElementById("padEndBtn");
const lengthBtn = document.getElementById("lengthBtn");
const repeatBtnX1 = document.getElementById("repeatBtnX1");


let updateUserName;

// ===================================== .startsWith() =====================================



AL_submitBtn.onclick = function(){
    
    let userName = userNameTextBox.value;


    if(userName.startsWith(" ") && userName.includes(" ") && userName.endsWith(" ")){ // Check
        AL_reply.textContent = `Your username CAN'T START, INCLUDE and END with " ".`;
    }

    if(userName.startsWith(" ") && userName.includes(" ")){
        AL_reply.textContent = `Your username CAN'T  START and INCLUDE " "`;
    }

    if(userName.startsWith(" ") && userName.endsWith(" ")){
        AL_reply.textContent = `Your username CAN'T START and END with " ".`;
    }

    if(userName.includes(" ") && userName.endsWith(" ")){
        AL_reply.textContent = `Your username CAN'T START and END with " ".`;
    }

    if(userName.startsWith(" ")){
        AL_reply.textContent = `Your username CAN'T START with " ".`;
    }

    if(userName.includes(" ")){
        AL_reply.textContent = `Your username CAN'T INCLUDE " ".`;
    }

    if(userName.endsWith(" ")){
        AL_reply.textContent = `Your username CAN'T END with " ".`;
    }

    if(!userName.startsWith(" ") && !userName.includes(" ") && !userName.endsWith(" ")){
        AL_reply.textContent = `HII, ${userName}! 😊`;
    }


    /*

        let userName = userNameTextBox.value; // VERY IMPORTANT TO BE DECLARED INSIDE!
        let checkingUserNameStart = userName.startsWith(" "); // VERY IMPORTANT TO BE DECLARED INSIDE!
        let checkingUserNameIncludes = userName.includes(" "); // VERY IMPORTANT TO BE DECLARED INSIDE!
        let checkingUserNameEnd = userName.endsWith(" "); // VERY IMPORTANT TO BE DECLARED INSIDE!

        if(checkingUserNameStart){
         AL_reply.textContent = `Your username can't start with " ".`;
        }
        else{
        AL_reply.textContent = `Hi there, ${userName}!`;
         }
    */


         // ===================================== .toUpperCase() =====================================

    upperCaseBtn.onclick = function(){


        updateUserName = userName.toUpperCase();

        AL_reply.textContent = `Your username has been uppercase'd, ${updateUserName}! 😄`;
    }

    // ===================================== .toLowerCase() =====================================

    lowerCaseBtn.onclick = function(){
        updateUserName = userName.toLowerCase();

        AL_reply.textContent = `Your username is now lowercase, ${updateUserName}. 😊`;
    }

    // ===================================== .repeat(2) =====================================

    repeatBtnX2.onclick = function(){
        updateUserName = userName.repeat(2);

        AL_reply.textContent = `Haiii, ${updateUserName}! 💞`;
    }

    // ===================================== .length =====================================

    lengthBtn.onclick = function(){

        AL_reply.textContent = `Length of ${userName} is: ${userName.length}`;
    }


    // ===================================== .repeat(1) =====================================

    repeatBtnX1.onclick = function(){

        AL_reply.textContent = `${userName}`;
    }

    // ===================================== .padStart() =====================================

    padStartBtn.onclick = function(){
        
        AL_reply.textContent = `${userName.padStart(10,"~")}`;
    }


    // ===================================== .padEnd() =====================================
   
    padEndBtn.onclick = function(){

        AL_reply.textContent = `${userName.padEnd(10, "~")}`;
    }
}

// ========== Name ===========
// .toUpperCase()
// .toLowerCase()
// .repeat()

// .startsWith()
// .includes()
// .endsWith()

// .padStart()
// .padEnd()

// ============= Phone Number ==========
// .replace()



// ======================================================================================================



const phone = document.getElementById("phone");
const AR_submitBtn = document.getElementById("AR_submitBtn");

const AR_reply1 = document.getElementById("AR_reply1");
const replaceBtn = document.getElementById("replaceBtn");

let phoneNumber;

AR_submitBtn.onclick = function(){
    
    phoneNumber = phone.value;

    AR_reply1.textContent = `Your phone number is ${phoneNumber}.`;
}

replaceBtn.onclick = function(){
   
    AR_reply1.textContent = `Your phone number is ${phoneNumber.replaceAll("-", "~")}`;
}