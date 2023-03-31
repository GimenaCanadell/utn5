/* ej1 */

let c1 = "negro";
let c2 = "azul";
let c3 = "rojo";
let c4 = "verde";
let c5 = "violeta";
const colores = [];
colores.unshift(c1, c2, c3, c4, c5);
console.log(colores);

//Ejercicio 2

let elem = colores[2]; //Genero la variable con el valor de la 3° posición del vector anterior
console.log("2-) ", elem);

//Ejercicio 3

console.log("3-) ", colores[0].charAt(0)); //uso la función privada para traerme la primer letra de la 1er posición

//Ejercicio 4

let num = Math.floor(Math.random() * 98) + 1; //Genera número aleatorio entre 1 y 99
console.log("4-) El número aleatorio es: ", num);

//Ejercicio 5

const numeros = [];
for (let i = 1; i <= 10; i++) {
  //Llena vector con los numeros del 1 al 10
  numeros.push(i);
}

console.log("5-) El array es: ", numeros);

//Ejercicio 6

const numeros2 = [];
for (let i = 1; i <= 10; i++) {
  let num = Math.floor(Math.random() * 99) + 1; //Genera y llena con numeros aleatorios entre 1 y 100
  numeros2.push(num);
}

console.log("6-) El array es: ", numeros2);

//Ejercicio 7

//const numeros3 = [numeros2] //Copia burda, te mete todo el vector en la primera posición del otro
const numeros3 = [];
numeros2.forEach((Element) => numeros3.push(Element)); //Esta es mucho mejor, se puede resolver con un for
//pero quise usar el forEach para empezar a aplicarlo

console.log("7-) primer array: ", numeros2);
console.log("7-) segundo array: ", numeros3);

//Ejercicio 8

let cadena = prompt("Ingrese palabras, 'cancelar' termina la carga");
let cadena2 = ""; //cadena vacía para poder acumular concatenando las palabras ingresadas
while (cadena != "cancelar") {
  //mientras la palabra no sea cancelar ingresa al while
  cadena2 = cadena2 + "-" + cadena; //A la cadena vacía le concatena el - y la palabra ingresada
  cadena = prompt("Ingrese nueva palabra, 'cancelar' termina la carga"); //solicitud de nueva palabra
}

console.log(cadena2); //Impresión del resultado de la carga concatenada en cadena

let cadena3 = prompt("Ingrese palabras, 'cancelar' termina la carga"); //solicito ingreso
let cadena4 = []; //declaro array vacío
while (cadena3 != "cancelar") {
  //valido ingreso
  cadena4.push(cadena3); //Carga del array con palabra ingresada
  cadena3 = prompt("Ingrese nueva palabra, 'cancelar' termina la carga"); //pedido nueva palabra para ingresar
}

//cadena4.forEach(Element => console.log(Element + "-")) //prueba de impresion con errores
let cadena5 = ""; //uso de cadena vacía para concatenar los valores del array
for (let i = 0; i < cadena4.length; i++) {
  //ciclo para recorrer el array
  cadena5 = cadena5 + "-" + cadena4[i]; //generación de cadena con valores del array mas -
}
console.log(cadena5);
//No creo que sea la mejor manera de resolver la segunda parte de este ejercicio pero fue la que me funcionó y me
//permitió continuar con los demás ejercicios

//Ejercicio 9

function convertir() {
  let dolares = document.getElementById("dolares").value; //toma valor en campo dólares
  let pesos = dolares * 300; //convierte
  document.getElementById("pesos").value = pesos; //devuelve en campo pesos
}

//Ejercicio 10

function convertir2() {
  let pesos = document.getElementById("pesos2").value; //toma valor en campo pesos
  let dolares = pesos / 300; //convierte
  document.getElementById("dolares2").value = dolares; //devuelve en campo dólares
}

//Ejercicio 11

function convertirgrados() {
  let gradosc = document.getElementById("gradoscelsius").value; //tomo valor del campo Celsius
  let gradosf = (gradosc * 9) / 5 + 32; //opero y convierto
  document.getElementById("gradosfarenheit").value = gradosf; //devuelvo en campo Farenheit
}

//Ejercicio 12

function cargacomentarios() {
  let nombre = document.getElementById("nombrecliente").value; //pido nombre
  let material = document.getElementById("listamateriales").value; //obtengo material seleccionado
  switch (
    true //analizo que dimensión fue seleccionada mediante switch
  ) {
    case document.getElementById("diminuta").checked:
      var tamaño = document.getElementById("diminuta").value;
      break;
    case document.getElementById("mediana").checked:
      tamaño = document.getElementById("mediana").value;
      break;
    case document.getElementById("grande").checked:
      tamaño = document.getElementById("grande").value;
      break;
    default:
      tamaño = "sin especificar";
      break;
  }
  let comentarios = document.getElementById("comentarios").value; //pido comentarios adicionales
  document.getElementById("textocomentarios").value =
    nombre +
    " ha pedido una caja de " +
    material +
    " de dimensión " +
    tamaño +
    ". " +
    comentarios;
} //imprimo todo concatenando los datos que me traje de cada parte del formulario

//Ejecicio 13

var nums = Math.floor(Math.random() * 6); //Genero aleatoriamente el número secreto
//console.log(nums) "Trampa" para corroborar el funcionamiento o "ganar" el juego

var int = 0;

function juego() {
  //Función del juego
  if (int < 3) {
    //Permite jugar siempre que los intentos sean menos de 3
    if (nums != document.getElementById("numintento").value) {
      //compara el valor ingresado con el num secreto y si
      document.getElementById("resultado").value =
        "Error, numero incorrecto. Intente nuevamente"; //no es el num
      int = int + 1; //comunica que no es el numero y aumenta el contador de intentos
      //console.log(int)
      document.getElementById("cantintentos").innerText = "Intentos : " + int; //muestra el incremento de intentos
      document.getElementById("numintento").value = ""; // limpia el campo de ingreso del intento
      document.getElementById("numintento").focus(this); //pone el foco en el campo para hacerlo mas práctico
    } else {
      //en el caso de que sea el numero secreto dentro de los 3 intentos
      int = int + 1; //incrementa contador
      document.getElementById("cantintentos").innerText = "Intentos : " + int; //muestra el incremento
      document.getElementById("resultado").value =
        "Felicitaciones, adivino el número " +
        nums +
        " en " +
        int +
        " intentos.";
    } //Comunica que se ganó el juego mostrando el número y la cantidad de intentos en que lo logró
  } else {
    document.getElementById("resultado").value =
      "Se acabaron los intentos, perdió el juego";
  } //En caso de superar los 3 intentos, comunica que se perdió el juego
}

//Ejercicio 14

let lista = document.getElementById("personas"); //le asigno una variable al DOM del elemento <ul>

function agregar() {
  let persona = document.getElementById("persona").value; //toma el nombre de la persona
  let nombre = document.createElement("li"); //crea un elemento item de lista
  nombre.appendChild(document.createTextNode(persona)); //al item le genera el texto con el nombre ingresado
  lista.appendChild(nombre); //A la lista le agrega el item generado con el nombre ingresado
  document.getElementById("persona").value = ""; //limpia el campo nombre
  document.getElementById("persona").focus(this); //pone el foco en el campo nuevamente
}
