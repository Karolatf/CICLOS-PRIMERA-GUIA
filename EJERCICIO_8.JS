for (let persona = 1; persona <= 5; persona++) {
  let nombre = prompt("Ingrese el nombre de la persona " + persona + ":");
  let edad = Number(prompt("Ingrese la edad de " + nombre + ":"));

  if (edad >= 18) {
    console.log(nombre + " es mayor de edad.");
  } else {
    console.log(nombre + " es menor de edad.");
  }
}

//Pide el nombre y la edad de cada persona//
//Usa un if para verificar si tiene 18 o más//