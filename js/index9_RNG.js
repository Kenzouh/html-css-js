// Random Number Generator

const min = 1;
const max = 6;

let randomNum;

let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
let randomNum5;
let randomNum6;


// =============================================================== Roll 1 Die ===============================================================
const rollButton1 = document.getElementById(`rollButton1`);
const asideLeft1_OutputLabel1 = document.getElementById(`asideLeft1_OutputLabel1`);


rollButton1.onclick = function(){

                  // floor = removes the decimal portion.
    randomNum = Math.floor(Math.random() * max) + min; // Generates a number between 1 and 6 EXCLUSIVE! 
    asideLeft1_OutputLabel1.textContent = randomNum;
}




// =============================================================== Roll 2 Dice ===============================================================
const rollButton2 = document.getElementById(`rollButton2`);
const asideRight1_OutputLabel1 = document.getElementById(`asideRight1_OutputLabel1`);
const asideRight1_OutputLabel2 = document.getElementById(`asideRight1_OutputLabel2`);


rollButton2.onclick = function(){
    
    randomNum1 = Math.floor(Math.random() * max) + min; // +1 (minimum) = from 0–5 to 0–6   
    randomNum2 = Math.floor(Math.random() * max) + min; 

    asideRight1_OutputLabel1.textContent = randomNum1;
    asideRight1_OutputLabel2.textContent = randomNum2;

    /* These bring out the same number output.
    asideRight1_OutputLabel1.textContent = randomNum;
    asideRight1_OutputLabel2.textContent = randomNum;
    */
}




// =============================================================== Roll 3 DIce ===============================================================
const rollButton3 = document.getElementById(`rollButton3`);
const asideLeft2_OutputLabel1 = document.getElementById(`asideLeft2_OutputLabel1`);
const asideLeft2_OutputLabel2 = document.getElementById(`asideLeft2_OutputLabel2`);
const asideLeft2_OutputLabel3 = document.getElementById(`asideLeft2_OutputLabel3`);


rollButton3.onclick = function(){

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    asideLeft2_OutputLabel1.textContent = randomNum1;
    asideLeft2_OutputLabel2.textContent = randomNum2;
    asideLeft2_OutputLabel3.textContent = randomNum3;
}




// =============================================================== Roll 4 Dice ===============================================================
const rollButton4 = document.getElementById(`rollButton4`);
const asideRight2_OutputLabel1 = document.getElementById(`asideRight2_OutputLabel1`);
const asideRight2_OutputLabel2 = document.getElementById(`asideRight2_OutputLabel2`);
const asideRight2_OutputLabel3 = document.getElementById(`asideRight2_OutputLabel3`);
const asideRight2_OutputLabel4 = document.getElementById(`asideRight2_OutputLabel4`);


rollButton4.onclick = function(){

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;

    asideRight2_OutputLabel1.textContent = randomNum1;
    asideRight2_OutputLabel2.textContent = randomNum2;
    asideRight2_OutputLabel3.textContent = randomNum3;
    asideRight2_OutputLabel4.textContent = randomNum4;
}




// =============================================================== Roll 5 Dice ===============================================================
const rollButton5 = document.getElementById(`rollButton5`);
const asideLeft3_OutputLabel1 = document.getElementById(`asideLeft3_OutputLabel1`);
const asideLeft3_OutputLabel2 = document.getElementById(`asideLeft3_OutputLabel2`);
const asideLeft3_OutputLabel3 = document.getElementById(`asideLeft3_OutputLabel3`);
const asideLeft3_OutputLabel4 = document.getElementById(`asideLeft3_OutputLabel4`);
const asideLeft3_OutputLabel5 = document.getElementById(`asideLeft3_OutputLabel5`);


rollButton5.onclick = function(){

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    randomNum5 = Math.floor(Math.random() * max) + min;

    asideLeft3_OutputLabel1.textContent = randomNum1;
    asideLeft3_OutputLabel2.textContent = randomNum2;
    asideLeft3_OutputLabel3.textContent = randomNum3;
    asideLeft3_OutputLabel4.textContent = randomNum4;
    asideLeft3_OutputLabel5.textContent = randomNum5;
}




// =============================================================== Roll 6 Dice ===============================================================
const rollButton6 = document.getElementById(`rollButton6`);
const asideRight3_OutputLabel1 = document.getElementById(`asideRight3_OutputLabel1`);
const asideRight3_OutputLabel2 = document.getElementById(`asideRight3_OutputLabel2`);
const asideRight3_OutputLabel3 = document.getElementById(`asideRight3_OutputLabel3`);
const asideRight3_OutputLabel4 = document.getElementById(`asideRight3_OutputLabel4`);
const asideRight3_OutputLabel5 = document.getElementById(`asideRight3_OutputLabel5`);
const asideRight3_OutputLabel6 = document.getElementById(`asideRight3_OutputLabel6`);


rollButton6.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    randomNum4 = Math.floor(Math.random() * max) + min;
    randomNum5 = Math.floor(Math.random() * max) + min;
    randomNum6 = Math.floor(Math.random() * max) + min;

    asideRight3_OutputLabel1.textContent = randomNum1;
    asideRight3_OutputLabel2.textContent = randomNum2;
    asideRight3_OutputLabel3.textContent = randomNum3;
    asideRight3_OutputLabel4.textContent = randomNum4;
    asideRight3_OutputLabel5.textContent = randomNum5;
    asideRight3_OutputLabel6.textContent = randomNum6;
}


// =============================================================== Random RNG ===============================================================
const rollButton7 = document.getElementById(`rollButton7`);
const asideRandom1_OutputLabel = document.getElementById(`asideRandom1_OutputLabel`);


rollButton7.onclick = function(){
    randomNum = Math.random(); // Generates a number between 0 and 1.
    asideRandom1_OutputLabel.textContent = randomNum;    
}

// =============================================================== Random RNG ===============================================================
const rollButton8 = document.getElementById(`rollButton8`);
const asideRandom2_OutputLabel = document.getElementById(`asideRandom2_OutputLabel`);


rollButton8.onclick = function(){
    randomNum = Math.floor(Math.random() * 6); // Generates a number between 0 and 5 EXCLUSIVE! 
    asideRandom2_OutputLabel.textContent = randomNum;
}

// =============================================================== 0–100 ===============================================================
const rollButton9 = document.getElementById(`rollButton9`);
const asideRandom3_OutputLabel = document.getElementById(`asideRandom3_OutputLabel`);


rollButton9.onclick = function(){
    randomNum = Math.floor(Math.random() * 101); // Generates a number between 0 and 100 EXCLUSIVE! 

    asideRandom3_OutputLabel.textContent = randomNum;
}

// =============================================================== 50–100 ===============================================================
const rollButton10 = document.getElementById(`rollButton10`);
const asideRandom4_OutputLabel = document.getElementById(`asideRandom4_OutputLabel`);



rollButton10.onclick = function(){
                                                       // + 50 meaning it'll be up to 149, but minus 49, it'll be 100
                                                       // (Programming is surreal)
                                         // 100 - 50   + 50 
    randomNum = Math.floor(Math.random() * (100 - 49)) + 50; // 50–100
    asideRandom4_OutputLabel.textContent = randomNum;
}