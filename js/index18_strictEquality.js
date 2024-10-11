// = → Assignment Operator
// == → Comparison Operator (compares the 2 VALUES if they're EQUAL)
// === → Strict Equality Operator (compares the 2 VALUES if they're EQUAL and have the SAME DATA TYPE)

// != → Inequality Operator
// !== → Strict Inequality Operator


console.log("==== Assignment Operator====");
console.log("");

let catfoodStock = 30;

console.log(`catfoodstock = 💥 ${catfoodStock} 💥`);
console.log("");


console.log("if(catfoodStock = 30)");
if(catfoodStock = 30){
    console.log("Catfood stock will last a month! :D");
}
else{
    console.log("The catfood won't last a month. :(");
}

// ========================================================================================================

console.log("");
console.log("==== Comparison Operator ====");
console.log("");

console.log(`if(catfoodStock == ${catfoodStock})`);
if(catfoodStock == 30){
    console.log("Catfood stock will last a month! :D");
}
else{
    console.log("The catfood won't last a month. :(");
}

console.log("");

console.log(`if(catfoodStock == "${catfoodStock}")`);
if(catfoodStock == "30"){
    console.log("Catfood stock will last a month! :D");
}
else{
    console.log("The catfood won't last a month. :(");
}

// ========================================================================================================

console.log("");
console.log("==== Strict Equality Operator ====");
console.log("");

console.log(`if(catfoodStock === ${catfoodStock})`);
if(catfoodStock === 30){
    console.log("Catfood stock will last a month! :D");
}
else{
    console.log("The catfood won't last a month. :(");
}

console.log("");

console.log(`if(catfoodStock === "${catfoodStock}")`);
if(catfoodStock === "30"){
    console.log("Catfood stock will last a month! :D");
}
else{
    console.log("The catfood won't last a month because it's an INT not a STRING. :(");
}

// ========================================================================================================

console.log("");
console.log("==== Inequality Operator ====");
console.log("");

console.log(`if(catfoodStock != ${catfoodStock})`);
if(catfoodStock != 30){
    console.log("The catfood won't last a month. :(");
}
else{
    console.log("ELSE: catfood stock will last a month! :D");
}

// ========================================================================================================

console.log("");
console.log("==== Strict Inequality Operator ====");
console.log("");

console.log(`if(catfoodStock !== ${catfoodStock})`);
if(catfoodStock !== 30){
    console.log("The catfood won't last a month. :(");
}
else{
    console.log("ELSE STATEMENT: catfood stock will last a month! :D");
}

console.log("");

console.log(`if(catfoodStock !== "${catfoodStock}")`);
if(catfoodStock !== "30"){
    console.log("IF STATEMENT: The catfood stock will last a month! :D");
}
else{
    console.log("ELSE: catfood stock won't last a month. :(");
}