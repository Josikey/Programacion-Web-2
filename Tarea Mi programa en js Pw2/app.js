let nombre = prompt("Escribe tu nombre: ");
console.log("Tu nombre es: " +nombre);

let edad = prompt("Escribe tu edad :");
console.log("Tu edad es: " +edad + " años"); 

let peso = prompt("Escribe tu peso (en kg):");
console.log("Tu peso es de: " +peso + " kg");

let estatura = prompt("Escribe tu estatura (en metros):");
console.log("Tu peso es de: " +estatura + " m");

let alCuadradoimc = Math.pow(parseFloat(estatura), 2);

let imc = parseFloat(peso) / alCuadradoimc;

console.log("Tu IMC (índice de masa corporal) es: " + imc.toFixed(2));
