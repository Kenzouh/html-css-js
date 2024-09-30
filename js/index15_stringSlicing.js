/*
    String Slicing = creating a substring from another string's part.
                    = won't alter the original string.

                     string.slice(start, end)
*/

const tomCatName = "Cupcake Meowston";
const queenName = "Catalina Meowlina";

console.log("Male Cat Name: " + tomCatName);
console.log("Female Cat Name: " + queenName);


console.log("");
console.log("======= String Slicing #1 =======");
console.log("");
                                   // Ending index is exclusive.
let tomCatFName = tomCatName.slice(0, 7);
let tomCatLName = tomCatName.slice(8, 16);

console.log(`Tomcat's First Name: ${tomCatFName}`);
console.log(`Tomcat's Last Name: ${tomCatLName}`);


console.log("");
console.log("======= String Slicing #2 =======");
console.log("");


let queenFName = queenName.slice(0, 8);

                                // Creating a substring from a position to the end doesn't require the ending index.
let queenLName = queenName.slice(9);

console.log(`Queen's First Name: ${queenFName}`);
console.log(`Queen's Last Name: ${queenLName}`);


console.log("");
console.log("======== Char Positions ========");
console.log("");


let dogBreed = "Husky";
console.log(`Dog Breed: ${dogBreed}`);

console.log("");

let firstChar = dogBreed.slice(0, 1);
let lastChar = dogBreed.slice(-1); // Negative Index = will begin at the end.
let last3Chars = dogBreed.slice(-3);

console.log(`First Character: ${firstChar}`);
console.log(`Last Character: ${lastChar}`);
console.log(`Last 3 Characters: ${last3Chars}`);


console.log("");
console.log("=========== indexOf() #1 ===========");
console.log("");


// To make the string slicing more dynamic
// indexOf method = searches the string of the first instance of a space, 
//                  then we'll take the first part of our full name and create a substring for the first name.

//                = Anything after the space will be our last name.

let chowChowName = "Teddy Waffles";
console.log(`Chow Chow Name: ${chowChowName}`);
console.log("");

                                    // 0 = start | indexOf("") = upon seeing " ", end before the empty space.
let chowChowFName = chowChowName.slice(0, chowChowName.indexOf(" "));
console.log(`Chow Chow First Name: ${chowChowFName}`);

                            //indexOf(" ") = start AT THE EMPTY SPACE. 
                                                              // +1 = move 1 space after indexOf(" ")
                                                              //      removes the empty space. 

                                    // you can list an ending index, but not needed here.
                                    // +1 = excludes the space.
let chowChowLName = chowChowName.slice(chowChowName.indexOf(" ") + 1);
console.log(`Chow Chow Last Name: ${chowChowLName}`);


console.log("");
console.log("=========== indexOf() #2 ===========");
console.log("");

let telNum = "+29-421-111-7250";

let countryCode = telNum.slice(0, telNum.indexOf("-"));
                          // Start after first dash   find the dash (2nd dash) after the first dash, then end there. 
let areaCode = telNum.slice(telNum.indexOf("-") + 1, telNum.indexOf("-", telNum.indexOf("-") + 1));
let telPrefix = telNum.slice(telNum.indexOf("-") + 5, telNum.indexOf("-", telNum.indexOf("-") + 5));
let lineNum = telNum.slice(telNum.indexOf("-") + 9);

console.log(`Fake Telephone Number: ${telNum}`);
console.log("");

console.log(`Country Code: ${countryCode}`);
console.log(`Area Code: ${areaCode}`);
console.log(`Telephone Prefix: ${telPrefix}`);
console.log(`Line Number: ${lineNum}`);

console.log("");

let areaCodeAndPrefix = telNum.slice(telNum.indexOf("-") + 1, telNum.indexOf("-", telNum.indexOf("-") + 5))
console.log(`Area Code & Prefix: ${areaCodeAndPrefix}`);

// telephone number
// +29-421-111-7250

// +29 = Country Code
// 421 = Area Code
// 111 = Telephone prefix
// 7250 = Line Number