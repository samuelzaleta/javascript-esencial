"use strict"

//Dato numericos 
 
var edad =35;
var numFlotante = 34.2;

var cantidad = "100";
var nuevaCantidad = Number(cantidad) //number cambias el valor de string a numero
//parseInt que sea solo entero
//parseFloat que sea flotante

//Datos de cadena

var bebida = "agua";
var comida ='pizza';

var instruccion = "El platillo se llama 'pizzad'";
// tratar un numero como texto
var edad2 = 34;
var edad2txt = String(edad);

//Datos boleanos 
var activo  = true;
var activo2 = false;
var estado = Boolean(10 > 9);// true

var estado = Boolean(9 > 10); //false

//Datos Fechas
var fecha = new Date();
console.log(fecha);
//dame la fecha
var dia = fecha.getDay();//dia
var dia = fecha.getMonth();//mes
var dia = fecha.getHours();//fecha
// mando fechas
var dia = fecha.setDate();//

//Datos simbolos

//son valores unicos 
var simbolo1 = Symbol();
var simbolo2 = Symbol();
var ambiente  = Symbol('dev');// si esta en ambiente de desarrollo


