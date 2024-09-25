// String Methods = helps you manipulate and work with strings.

let pokemonName = "Bulbasaur";
console.log("pokemonName = \"Bulbasaur\";");

// == .charAt() ==

 /*                         pokemonName           = string or a variable containing a string
                                       .          = accessing any properties/methods that a string has.
                                        charAt(4) = get character at index 4.*/
console.log("charAt(4): " + pokemonName.charAt(4));

console.log("");
console.log("================================");
console.log("");

// ===============================================================================

pokemonName = "Ditto";
console.log(`pokemonName = "Ditto";`);

// == .indexOf() ==
// indexOf() = returns the index of the first occurence of the letter you inputted. 
console.log(`indexOf("t"): ` + pokemonName.indexOf("t"));

// == .lastIndexOf() ==
console.log(`lastIndexOf("t"): ` + pokemonName.lastIndexOf("t"));

console.log("");

pokemonName = "Exeggcute";
console.log(`pokemonName = "Exeggcute";`);

// == .indexOf() ==
console.log(`indexOf("E"): ` + pokemonName.indexOf("E"));

// == .lastIndexOf() ==
console.log(`lastIndexOf("E"): ` + pokemonName.lastIndexOf("E"));
console.log(`lastIndexOf("e"): ` + pokemonName.lastIndexOf("e"));
console.log(`lastIndexOf("g"): ` + pokemonName.lastIndexOf("g"));

console.log("");
console.log("================================");
console.log("");

// ===============================================================================

pokemonName = "      Eevee";
console.log(`pokemonName = "${pokemonName}";`);

// == .trim() ==
//                        removes blank spaces.
pokemonName = pokemonName.trim()
console.log(".trim(): " + pokemonName);

// == .toUpperCase() ==
console.log(".toUpperCase(): " + pokemonName.toUpperCase());

// == .toLowerCase() ==
console.log(".toLowerCase(): " + pokemonName.toLowerCase());


console.log("");
console.log("================================");
console.log("");

// ===============================================================================

pokemonName = "Charizard";
console.log(`pokemonName = "${pokemonName}";`)

// == .repeat() ==
console.log(".repeat(3): " + pokemonName.repeat(3));

// == .replaceAll ==
console.log(`.replaceAll("a", "@"): ` + pokemonName.replaceAll("a", "@"));

// == .length ==
// length = not a method.
console.log(".length: " + pokemonName.length); 