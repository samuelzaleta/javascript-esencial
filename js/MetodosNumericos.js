"use strict"
var numero = '10.30';
console.log('number ', typeof numero, typeof Number(numero));
console.log('parseInt ',parseInt(numero));
console.log('parseNumeri ',parseFloat(numero));
console.log('isNAN ',isNaN(numero));
console.log('isInteger ',Number.isInteger(numero));


numero = 2.7;
console.log('toExponential ', numero.toExponential(4));
console.log('toFixed ', numero.toFixed(4)); //ajustes a estos valores 
console.log('toPrecision ', numero.toPrecision(6));
console.log('ToString ', typeof numero.toString())