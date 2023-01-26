let firstName = "Facundo";
let lastName = "Maggi";
let country = "Argentina";
let city = "Avellaneda";
let age = 21;
let isMarried = false;
let year = 2022;

console.log(
	typeof firstName,
	typeof lastName,
	typeof country,
	typeof city,
	typeof age,
	typeof isMarried,
	typeof year
);

console.log(typeof "10", typeof 10);
console.log(parseInt("9.8"), 10);
console.log(21 ? true : false, "21" ? true : false, true ? true : false);
console.log("" ? true : false, NaN ? true : false, 0 ? true : false);

let salida = prompt("ingresa base");
let salida2 = prompt("ingresa altura");

let area = (salida * salida2) / 2;
console.log(area);

let salida12 = parseInt(prompt("ingresa lado a"));
let salida22 = parseInt(prompt("ingresa lado b"));
let salida3 = parseInt(prompt("ingresa lado c"));

console.log("el perimetro es: ", salida12 + salida22 + salida3);
