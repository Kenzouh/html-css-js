let faveColor;
let faveAnimal;

document.getElementById(`submitButton`).onclick = function(){

    faveColor = document.getElementById(`textBoxColor`).value;
    faveAnimal = document.getElementById(`textBoxAnimal`).value;


    console.log(`== Answers Submitted ==`);
    
    console.log(`Your favorite color is ${faveColor}.`);
    console.log(`Your favorite animal is ${faveAnimal}.`);
    console.log(`Thank you for your time! :)`);
    

    document.getElementById(`answer1`).textContent = `Your favorite color is ${faveColor}!`;
    document.getElementById(`answer2`).textContent = `Your favorite animal is ${faveAnimal}!`;
    document.getElementById(`consoleNote`).textContent = `Check the console too! Right click -> Inspect -> Console`;
    
    window.alert(`Thank you for answering! Be sure to check the console too! :)`);    
}
