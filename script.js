//Comentario de una linea

/*
Comentarios de multiples lines
*/

// alert("Estoy vivo!!!!");

// console.log("Este es un mensaje para la consola");

// var nombre="Carlos David";
// var apellidos = "Fregoso Garcia";
// var edad = 22;

// console.log(nombre,apellidos,edad);

// alert("Mi nombre es " + nombre);
// console.log("Mi nombre es: " + apellidos);

// alert("Mi nombre es: " + nombre + " \nMis apellidos son " + apellidos + " \nMi edad es: " + edad);

// //Otro ejemplo de como mostrar variables en consola

// var numero1 = 5;
// var numero2 = 7;
// var resultado = numero1 + numero2;

// console.log("El resultado de la suma: " + resultado);

/*Sintaxis basica de una funcion

function nombrefuncion(parametros){
    instrucciones;
}

*/

function saludar(){
    alert("Hola a todos");
}

saludar();

//Expresion de funcion

var cantar = function(){
    alert("A mi me gusta cantar");
}

cantar();

//Funcion sin parametros

function sumar(){
    var numero1 = 5;
    var numero2 = 6;
    var suma = numero1 + numero2;
    alert("La suma de la funcion sin parametros es: " + suma);
}

sumar();

//Funcion con parametros
function restar(num1,num2,resta){
    var num1 = 6;
    var num2 = 8;
    var resta = num1 - num2;
    alert("La resta de la funcion con parametros es: " + resta);
}

restar();

//Otra funcion con parametros

function Cuadrado(cuadrado){
    var rescuadrado = cuadrado * cuadrado;
    alert("El cuadrado del numero es " + rescuadrado);
}

Cuadrado(4);

function Operaciones(num1,num2,num3,suma,resta,multi){
    var suma = num1 + num2 + num3;
    var resta = num1 - num2 - num3;
    var multi = num1 * num2 * num3;

    alert("La suma es: " + suma + "\nLa resta es: " + resta + "\nLa multiplicacion es: " + multi);
}

Operaciones(5,6,7);