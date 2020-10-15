"use strict"
var edad  = 30;
var resultador  = '';

switch(edad){
    case 10:
        resultador ='10';
    break;
    case 20:
        resultador ='20';
    break;
    case 30:
        resultador = '30';
    break;
    default:
        resultador = 'por defecto';
    break;
}
console.log(resultador)