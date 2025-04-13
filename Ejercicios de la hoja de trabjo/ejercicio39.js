let numeros = [5, 7, 9, 10, 11];

let primerPar = numeros.find(function(numero) {
  return numero % 2 === 0;
});

console.log(primerPar); // Resultado: 10
