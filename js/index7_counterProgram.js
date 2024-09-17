const numberLabel = document.getElementById(`numberLabel`);

const minusBtn = document.getElementById(`minusBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const addBtn = document.getElementById(`addBtn`);

let number = 0;

       // onclick attribute
minusBtn.onclick = function(){
    number--;
    numberLabel.textContent = number;
    console.log(`-1`);
}

resetBtn.onclick = function(){
    number = 0;
    numberLabel.textContent = number;
    console.log(`== Reset ==`);
}

addBtn.onclick = function(){
    number++;
    numberLabel.textContent = number;
    console.log(`+1`);
}