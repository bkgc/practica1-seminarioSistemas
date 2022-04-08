function funcion(A) {
    let numeros = { numerosPares: [], numerosImpares: [] };
    for (let i = 0; i < A.length; i++) {
      if (A[i] % 2 == 0) {
        numeros.numerosPares.push(A[i]);
      } else {
        numeros.numerosImpares.push(A[i]);
      }
    }
    return numeros;
  }
  let A = [1, 5 , 10 , 15 , 20 , 25, 30];