let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
let toUpper = challenge.toUpperCase();
console.log(toUpper);
let toUnder = challenge.toLowerCase();
console.log(toUnder);
console.log(challenge.substr(0, 2));
console.log(challenge.substr(2, challenge.length));
console.log(challenge.includes("Script"));
let array = challenge.split();
console.log(array);
challenge.split(" ");
console.log(challenge);
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split());
console.log(string.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(
	"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
	"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
let dies = "10";
let numero = 9.8;
let numero1 = Math.round(numero);
console.log(numero1);
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));
let random = Math.random();
let zeroACien = random * 100;
let cincuentaACien = 50 - random * 100;
let otro = random * 255;
console.log(zeroACien, cincuentaACien, otro);
console.log("1 1 1 1 1 \n2 1 2 4 6\n3 1 3 6 9\n4 1 4 8 16\n5 1 5 25 125");
let frase =
	"You cannot end a sentence with because because because is a conjunction";
console.log(frase.substr(30, 30));
