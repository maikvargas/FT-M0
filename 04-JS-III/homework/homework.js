// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  for (i in array) {
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var frase= ""
  for (let i = 0; i < palabras.length; i++) {
    //const element = array[i];
    if (i==palabras.length-1) {
      frase= frase + palabras[i];
    }else frase= frase + palabras[i] + " ";     
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i=0; i<array.length;i++){
    if (elemento===array[i]) {
      return true;
    }
  }return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  for (let i = 0; i < numeros.length; i++) {
    suma=suma+numeros[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma=0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma=suma+resultadosTest[i];
  }
  return suma/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var big=numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>big) {
      big=numeros[i];
    }
  }
  return big;
}


function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  function tabladel6() {
    i=0
    producto=[]
    while (i<=10) {
      producto.push(6*i)
      i++;
    }
  return producto;
  }
  return tabladel6();
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length<1) return 0;
  var producto=1;
  for (const i in arguments) {
    producto=producto*arguments[i];
  }return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  function elementos_(arreglo) {
    var mayorque18=[];
    for(const i in arreglo){
      if (arreglo[i]>18) {
        mayorque18.push(arreglo[i]);
      }
    }return mayorque18.length;
  }return elementos_(arreglo);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: "Es fin de semana"
  //si el día corresponde a Sábado o Domingo y "Es dia Laboral" en caso contrario. 
  //Escribe tu código aquí   
  function semananum(numeroDeDia) {
    if (numeroDeDia>=2 && numeroDeDia<=6) {
      return "Es dia Laboral";
    }else return "Es fin de semana";
  }
  return semananum(numeroDeDia);
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  function tienenueve(n) {
    var nine=n.toString();
    if (nine.charAt(0)==="9") {
      return true;
    }else return false;
  }
  return tienenueve(n);
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var elemet_of_arreglo=arreglo[0];
  for (let i=0; i<arreglo.length; i++) {
    if (arreglo[i]===elemet_of_arreglo) {
      elemet_of_arreglo=arreglo[i];
    }
  }if (elemet_of_arreglo===arreglo[1]) {
    return true;
  }else return false;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  newarray=[];
  for (const i in array) {
    switch (array[i]) {
      case "Enero":
        newarray.push(array[i]);
        break;
      case "Marzo":
        newarray.push(array[i]);
        break;
      case "Noviembre":
        newarray.push(array[i]);
        break;
      default:
        break;
    }
    if (newarray.length==3) {
      return newarray;
    }
  }return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  newarray=[];
  for (const i in array) {
    if (array[i]>100) {
      newarray.push(array[i]);
    }
  }return newarray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i=1
  var valor=numero;
  var newarray=[];
  while (i<=10) {
    i++;
    valor=valor+2;
    newarray.push(valor);
    if (valor===i) {
      break;
    }
  }if (valor===i) {
    return "Se interrumpió la ejecución";
  }else return newarray; 
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i=1
  var valor=numero;
  var newarray=[];
  while (i<=10) {
    i++;    
    if (i!=5) {
      valor=valor+2;
    newarray.push(valor);
    }else continue;
  }return newarray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  tablaDelSeis,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
