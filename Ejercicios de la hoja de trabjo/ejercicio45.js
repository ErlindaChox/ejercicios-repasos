let libro = {
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry'
  };
  
  delete libro.autor;
  
  console.log(libro); // Resultado: { titulo: 'El Principito' }
  