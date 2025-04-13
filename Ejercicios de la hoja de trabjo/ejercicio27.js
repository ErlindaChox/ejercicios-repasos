function puedeVotar(edad) {
    if (edad >= 18) {
      return "Puede votar";
    } else {
      return "No puede votar";
    }
  }
  
  console.log(puedeVotar(16)); // Resultado: No puede votar
  