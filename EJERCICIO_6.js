for (let comprador = 1; comprador <= 15; comprador++) {
  let edad = Number(prompt("Edad del comprador " + comprador + ":"));
  let peliculaAdultos = prompt("¿La película es para adultos? (si/no)");

  if (peliculaAdultos.toLowerCase() === "si") {
    if (edad >= 18) {
      console.log("Compra aprobada. El comprador " + comprador + " puede ver la película.");
    } else {
      console.log("Compra rechazada. El comprador " + comprador + " es menor de edad.");
    }
  } else {
    console.log("Compra aprobada. La película no es para adultos.");
  }
}

//Pide la edad y si la película es para adultos/

//Si la película es para adultos, revisa que el comprador tenga al menos 18 años

//Si no, se aprueba la compra automáticamente