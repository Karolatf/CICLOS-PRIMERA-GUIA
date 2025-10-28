let saldo = 100000;

while (saldo > 0) {
  let valor = Number(prompt("Saldo actual: " + saldo + "\nIngrese valor a retirar:"));

  if (valor <= saldo) {
    saldo = saldo - valor;
    console.log("Retiro exitoso. Saldo restante: " + saldo);
  } else {
    console.log("Saldo insuficiente. No puede retirar esa cantidad.");
  }

  if (saldo === 0) {
    console.log("El saldo llegó a 0. Fin del programa.");
    break;
  }
}

//El while (saldo > 0) repite mientras haya dinero//

//Si el valor a retirar es menor o igual al saldo, se descuenta//

//Si es mayor, muestra “Saldo insuficiente”//

//Cuando el saldo llega a 0, se termina el programa//