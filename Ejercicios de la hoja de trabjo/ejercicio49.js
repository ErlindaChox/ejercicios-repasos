let alumno = {
    nombre: 'Sofía',
    saludar: function() {
      return 'Hola, soy ' + this.nombre;
    }
  };
  
  console.log(alumno.saludar()); // Resultado: Hola, soy Sofía
  