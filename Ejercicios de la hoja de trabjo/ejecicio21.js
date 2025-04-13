let contraseñaCorrecta = "abc123";
let intento;

do {
  intento = prompt("Introduce la contraseña:");
} while (intento !== contraseñaCorrecta);

console.log("¡Contraseña correcta!");
