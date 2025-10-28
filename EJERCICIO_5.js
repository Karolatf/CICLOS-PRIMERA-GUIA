for (let corredor = 1; corredor <= 8; corredor++) {
  for (let vuelta = 1; vuelta <= 4; vuelta++) {
    let cansado = prompt("¿El corredor " + corredor + " se cansó en la vuelta " + vuelta + "? (si/no)");

    if (cansado.toLowerCase() === "si") {
      console.log("El corredor " + corredor + " se detuvo en la vuelta " + vuelta + ".");
      break; // sale del ciclo de vueltas
    } else {
      console.log("Corredor " + corredor + " completó la vuelta " + vuelta + ".");
    }
  }
}

//Ciclo externo: recorre los 8 corredores./

//Ciclo interno: recorre las 4 vueltas de cada corredor/

//Si el corredor se cansa, usa break para detener sus vueltas y pasar al siguiente//