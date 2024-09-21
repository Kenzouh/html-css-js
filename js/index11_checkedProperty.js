/*
 .checked property = determines checkboxes/radio button elements' checked state
                     whether they are checked or unchecked. 
*/

// ====================================== Checkboxes ======================================

const cat = document.getElementById("cat");
const dog = document.getElementById("dog");
const fish = document.getElementById("fish");
const rabbit = document.getElementById("rabbit");

//    AL = Aside Left
const AL_submitBtn = document.getElementById("AL_submitBtn");
const animalResult = document.getElementById("animalResult");


AL_submitBtn.onclick = function(){
    

    // ================= If chose cat as 1st option =================

      // Checked Property
    if(cat.checked){

        animalResult.textContent = `Your favorite animal is a cat! 😸`;

        if(dog.checked){
            animalResult.textContent = `Your favorite animals are cats and dogs! 😸🐶`;

            if(fish.checked){
                animalResult.textContent = `Your favorite animals are cats, dogs and fish! 😸🐶🐟`;

                if(rabbit.checked){
                    animalResult.textContent = `Your favorite animals are cats, dogs, fish and rabbits! 😸🐶🐟🐰`;
                }
            }

            else if(rabbit.checked){
                animalResult.textContent = `Your favorite animals are cats, dogs and rabbits! 😸🐶🐰`;
            }
        }

        else if(fish.checked){
            animalResult.textContent = `Your favorite animals are cats and fish! 😸🐟`;

            if(rabbit.checked){
                animalResult.textContent = `Your favorite animals are cats, fish and rabbits! 😸🐟🐰`;
            }
        }

        else if (rabbit.checked){
            animalResult.textContent = `Your favorite animals are cats and rabbits! 😸🐰`;
        }
    }

    // ================= If chose dog as first option =================

    else if(dog.checked){

        animalResult.textContent = `Your favorite animal is a dog! 🐶`;

        if(fish.checked){
            animalResult.textContent = `Your favorite animals are dogs and fish! 🐶🐟`;

            if(rabbit.checked){
                animalResult.textContent = `Your favorite animals are dogs, fish and rabbits! 🐶🐟🐰`;
            }
        }

        else if(rabbit.checked){
            animalResult.textContent = `Your favorite animals are dogs and rabbits! 🐶🐰`;
        }

    }

    // ================= If chose fish as first option =================
    
    else if(fish.checked){

        animalResult.textContent = `Your favorite animal is a fish! 🐟`;

        if(rabbit.checked){
            
            animalResult.textContent = `Your favorite animals are fish and rabbits! 🐟🐰`;
        }
    }

    // ================= If chose rabbit as first option =================

    else if(rabbit.checked){

        animalResult.textContent = `Your favorite animal is a rabbit! 🐰`;
    }

    // ================= If chose nothing =================

    else{
        animalResult.textContent = `You chose nothing!`;
    }
}


// ====================================== Radio Buttons ======================================


const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const brown = document.getElementById("brown");
const black = document.getElementById("black");

//    AR = Aside Right
const AR_submitBtn = document.getElementById("AR_submitBtn");
const colorResult = document.getElementById("colorResult");


AR_submitBtn.onclick = function(){
    
    if(orange.checked){
        colorResult.textContent = `🧡 Your favorite color is ORANGE! 🧡`;
    }

    else if(yellow.checked){
        colorResult.textContent = `⭐ Your favorite color is YELLOW! ⭐`;
    }

    else if(brown.checked){
        colorResult.textContent = `🍄‍🟫 Your favorite color is BROWN! 🍄‍🟫`;
    }

    else if(black.checked){
        colorResult.textContent = `⚫ Your favorite color is BLACK! ⚫`;
    }
    
    else{
        colorResult.textContent = `You neither liked the colors above!`;
    }
}