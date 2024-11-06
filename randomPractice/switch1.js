                                                   // 10 = radix parameter. Base 10 integer should be accepted.
let age = parseInt(window.prompt("How old are you?"), 10);

switch(true){

    case age > 60:
        window.alert("You're a senior!");
        break;

    case age > 55:
        window.alert("You're on your late 50s!");
        break;

    case age > 49:
        window.alert("You're on your early 50s!");
        break;

    case age > 45:
        window.alert("You're on your late 40s!");
        break;
    
    case age > 39:
        window.alert("You're on your early 40s!");
        break;

    case age > 35:
        window.alert("You're on your late 30s!");
        break;

    case age > 29:
        window.alert("You're on your early 30s!");
        break;
    
    case age > 25:
        window.alert("You're on your late 20s!");
        break;
    
    case age > 19:
        window.alert("You're on your early 20s!");
        break;

    case age > 12:
        window.alert("You're a teenager! :D");
        break;

    case age > 4:
        window.alert("You're a child!");
        break;

    case age >= 0:
        window.alert("Welcome to this world, baby! :)");
        break;

    case age < 0:
        window.alert("You can't be negative years old!");
        break;

    default:
        window.alert("Please, enter an age! Thank you! :)");
}