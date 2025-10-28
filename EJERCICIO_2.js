for (let estudiante = 1; estudiante <= 5; estudiante++) {
  let tieneCarne = prompt("¿El estudiante " + estudiante + " tiene carné? (si/no)");

  if (tieneCarne.toLowerCase() === "si") {
    console.log("Estudiante " + estudiante + ": Puede ingresar al salón.");
  } else {
    console.log("Estudiante " + estudiante + ": No puede ingresar (sin carné).");
  }
}

//El ciclo for repite 5 veces (uno por estudiante)//

//prompt pide si tiene carné//

//if compara si la respuesta es “si”//