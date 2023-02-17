// Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros. 

// - Ejecuta esta función sin pasar ningún parametro
// - Ejecuta esta función pasando un solo parametro
// - Ejecuta esta función pasando dos parametros



const suma = (a = 10, b = 5) => {
    console.log(a + b);
  };
  
  
  suma() // toma los valores indicados 10 y 5
  

  suma(20) // toma solo como primer valor 20 el segundo al no indicarlo pone comop predeterminado 5
  

  suma(2, 3) // suma 2 y 3