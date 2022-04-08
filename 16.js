function funcion(A) {
    let B = [];
    for (let i = 0; i < A.length; i++) {
      let cont = 0;
      for (let j = i; j < A.length; j++) {
        if (A[i] == A[j]) {
          cont++;
        }
      }
      if (cont == 1) {
        B.push(A[i]);
      }
    }
    return B;
  }
  let A = [5, 25, 10, "s", 5, "a", "a"];
  let resultado = funcion(A);
  document.write(resultado);
  EJERCICIO 17
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