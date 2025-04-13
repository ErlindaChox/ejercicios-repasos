let numeros = [5, 12, 8, 20, 7];

let mayores = numeros.filter(function(numero) {
  return numero > 10;
});

console.log(mayores); // Resultado: [12, 20]
