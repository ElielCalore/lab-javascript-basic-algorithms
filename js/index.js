// Iteration 1: Names and Input
//
// Iteration 2: Conditionals

// Iteration 3: Loops

//start of iteration 1
let hacker1 = "ELiel";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Alexandre";
console.log(`The navigator's name is ${hacker2}`);
//end of iteration 1

//start of iteration 2
let h1 = hacker1.length;
let h2 = hacker2.length;

if (h1 > h2) {
    console.log(`The driver has the longest name, it has ${h1} characters.`);
}
if (h1 < h2) {
    console.log(
        `It seems that the navigator has the longest name, it has ${h2} characters.`
    );
}
if (h1 === h2) {
    console.log("Wow, you both have equally long names " + h1 + " characters!");
}
//end of iteration 2

//start of iteration 3.1
let variableName = "";
for (let i = 0; i < h1; i++) {
    variableName += hacker1[i].toUpperCase() + " ";
}
console.log(variableName);
//end of iteration 3.1

//start of iteration 3.2
variableName = "";
for (let i = h2 - 1; i >= 0; i--) {
    variableName += hacker2[i];
}
console.log(variableName);
//end of iteration 3.2

//start of iteration 3.3
let lexicographicalOrder = [hacker1, hacker2];
console.log(lexicographicalOrder[0]);
console.log(lexicographicalOrder[1]);
console.log(lexicographicalOrder.sort());
//end of iteration 3.3
/*
let text = "HELLO WORLD";
let code = text.charCodeAt(0);
console.log(code);
*/