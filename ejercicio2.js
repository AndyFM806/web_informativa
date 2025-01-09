let A = 10;
let B = 20;
  
      if (A < B) {
        let pares = 0;
        let impares = 0;
  
        for (let numero = A; numero <= B; numero++) {
          if (numero % 2 === 0) {
            pares++;
          } else {
            impares++;
          }
        }
        console.log("El rango es desde: "+ A +" hasta " + B );
        console.log("Cantidad de numeros pares:" + pares);
        console.log("Cantidad de numeros impares:" + impares);
      } else {
        console.log("A debe ser menor que B. Por favor, intenta de nuevo.");
      }
  
      

  