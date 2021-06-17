// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var array = [];
  array = string.split("");
  var objeto = {};
  for (var i = 0; i < array.length; i++){
    if (objeto[array[i]]){
      objeto[array[i]]++;
    }else{
      objeto[array[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var array = s.split("");
  var arrayMayus = [];
  var arrayMinus = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === s.charAt(i).toUpperCase()){
      arrayMayus.push(array[i]);
    }else {
      arrayMinus.push(array[i]);
    }
  }
  return arrayMayus.join('') + arrayMinus.join('');
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split("");
  array.reverse();
  var nuevoString = array.join("");
  var arrayFrase = nuevoString.split(" ");
  var fraseReverse = arrayFrase.reverse().join(" ");
  return fraseReverse;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroAString = numero.toString();
  var arrayString = numeroAString.split("");
  var arrayStringReverse = arrayString.reverse();
  var stringReverse = arrayStringReverse.join("");
  if (numeroAString === stringReverse){
    return "Es capicua";
  }else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var array = cadena.split("");
  var nuevoArray = [];
  for (var i = 0; i < array.length; i++){
    if ((array[i] !== 'a') && (array[i] !== 'b') && (array[i] !== 'c')){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    if (a.length > b.length){
      return 1;                //los cambia de lugar
    }else if (a.length < b.length){
      return -1;
    }else {
      return 0;
    }
  })
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];
  var arrayLarger = 0;
  if (arreglo1.length > arreglo2.length){
    arrayLarger = arreglo1.length;
  }else {
    arrayLarger = arreglo2.length;
  }
  for (var i = 0; i < arrayLarger; i++){
    for(var j = 0; j < arrayLarger; j++){
      if (arreglo1[i] === arreglo2[j]){
        nuevoArray.push(arreglo1[i])
      }
    }
  }
  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

