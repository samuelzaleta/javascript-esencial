"use strict"

var datoA = 10;
var datoB = 20;

//SUMA
var suma = datoA + datoB;
console.log("dato A " + datoA + " + " + "datoB " + datoB + ' =' + suma);

//RESTA
var resta = datoA -  datoB;
console.log("dato A " + datoA + " - " + "datoB = " + datoB + ' =', resta);
 
//MULTIPLICACION
var multiplicación = datoA * datoB;
console.log('Multiplicacion ' , multiplicación);

//DIVISION
var division = datoA /datoB;
console.log('Division ',  division)

//INCREMENTO
var incremento = datoA;
incremento ++;
console.log(datoA +' incremento ',  incremento);

//DECREMENTO
var decremento = datoB;
decremento --;
console.log(datoB + ' decremento ' , decremento) 

//MAYOR QUE >
var mayorque = datoA > datoB;
console.log(mayorque);
//MENOR QUE <
var menorque = datoA < datoB;
console.log(menorque);
//MAYOR O IGUAL QUE >=
var mayoroigualque = datoA >= datoB;
console.log(mayoroigualque);
//MENOR O IGUAL QUE <=
var menoroigualque = datoA <= datoB;
console.log(menoroigualque);
//IGUAL QUE ==
var igualque =  datoA == datoB; 
console.log(igualque);
// NO ES IGUAL QUE O ES DIFERENTE QUE !=
var diferente = datoA != datoB;
console.log(diferente);

//OPERACION AND  o Y
var and =(datoA >11 && datoB > 10);
console.log('resultado ', and);
//OPERACION O u OR
var or =(datoA > 10 || datoB > 10);
console.log('resultado ', or);
//OPERACION DE NEGACION o NOT
var not =!(datoA > 100);
console.log('resultado ', not)

//ASIGNACION SIMPLE 
var igual = datoA;
console.log('El resultado de la asignación simples es ' , igual);

//SUMAR Y ASIGNAR
var masIgual = 10;
masIgual += datoA;
console.log(masIgual);
//RESTAR Y ASIGNAR
var menorIgual = 10;
menorIgual -= datoA;
console.log(menorIgual);

//MULTIPLICACION Y ASIGNAR
var porIgual = 10;
porIgual *= datoA;
console.log(porIgual);
//DIVIDIR Y ASIGNAR 
var entreIgual =20;
entreIgual /= datoA;
console.log(entreIgual);

//OPERADOR NEGATIVO
datoB = -datoA;
console.log('dato b =' +  datoB);
datoB = 20;


//CONCATENACIÓN 
var dato1 = 20;
var dato2 = 10;

var nombre = 'Samuel';
var apellido  = 'Zaleta';
//CONCATENACION DE NUMERO
var concatenacionNum = dato1 + dato2;
console.log('concanetacion numeros ' , concatenacionNum);

//CONCATENACIÓN DE STRING
var concatenacionString = nombre + " " + apellido;
console.log(concatenacionString);
//CONC NUMEROS COMO STRING
var concatenacionComoTxt = "2" + "8";
console.log(concatenacionComoTxt);
//CONC TXT + NUM
var concatTxtNum = dato2 + "8"
console.log(concatTxtNum);

//OPERADOR TERNARIO U OPERADOR CONDICIONAL
// condicion ? TRUE :  FALSE
var resultadoOperadorTernario =(datoA > datoB)? "Si es mayor":"No es mayor";
console.log(resultadoOperadorTernario);
var resultadoOperadorTernario =(datoA < datoB)? "Si es menor":"No es menor";
console.log(resultadoOperadorTernario);

//OPERADOR TIPO DE DATO
datoA; //nuemero
nombre; //cadena de texto
var activo =true //Boleano

var persona = {
    edad : 34,
    deporte : 'correr'
} //objeto

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);
console.log(typeof persona);
console.log(typeof persona.edad);
console.log(typeof persona.deporte);