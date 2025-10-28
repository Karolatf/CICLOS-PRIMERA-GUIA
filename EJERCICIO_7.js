let suma = 0;

for (let numero = 1; numero <= 100; numero++) {
  if (numero > 90 && numero % 2 === 0) {
    console.log("Número " + numero + " cumple la condición. Ciclo interrumpido.");
    break; // detiene el ciclo
  }

  suma = suma + numero;
}

console.log("La suma total es: " + suma);

//El ciclo suma del 1 al 100//

//Si aparece un número mayor a 90 y par, el ciclo se detiene con break/