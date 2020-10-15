"use strict"

function saludar(){
    var saludo = 'Hola mundo';
    console.log(saludo);
}
saludar();
//parametros
function saludar2(nombre, edad){
    console.log('hola :' + nombre);
    console.log('Edad' , edad);
    var resultado = nombre + ' tiene ' + edad + 'años';
    return resultado;
}
var mensaje =saludar2('samuel',21);
console.log(mensaje);

//inicializacion de parametros
function contar(cantidad = 20){
    console.log('total ' ,  cantidad);
}
contar(100);
//parametros rest
function cocinar(ingrediente1, ingrediente2,...masIngredientes){
    console.log('Ingrediente 1 ',  ingrediente1);
    console.log('Ingrediente 2 ',  ingrediente2);
    console.log('masIngredientes ', masIngredientes);
}
cocinar('pollo','tomate', 'Arroz', 'Frijoles','Pescado', 'Chile');

//parametros Spread
function cocinar2(ingrediente1, ingrediente2,ingredientes3, ...otros){
    console.log('Ingrediente 1 ',  ingrediente1);
    console.log('Ingrediente 2 ',  ingrediente2);
    console.log('masIngredientes ', ingredientes3);
    console.log('otros ' , otros)
}
var ingredienteBase =['pollo','tomate']
cocinar2(...ingredienteBase, 'arroz', 'pescado','chile');

//funcion anonima
var saludar = function(nombre){
    var mensaje2 = 'hola de nuevo ' + nombre;
    return mensaje2;
}
//callbacks
//sirve para los procesos asincronos
function calcular(dato1, dato2, sumarCB, resartCB){
    var sumar = dato1 + dato2;
    var restar = dato1 - dato2;
    sumarCB(sumar);
    resartCB(restar);
}
calcular(2,3, function(resultado){
    console.log('Suma ', resultado);
},function(resultado){
    console.log('Resta ', resultado);
})
// funcion arrow |fat arrow | lamdba
var saludar3 = nombre => 'hola ' + nombre;
console.log(saludar3('susana'));
var sumar = candidad => candidad + 3;
console.log(sumar(10));
var calcular = calcular => calcular + 10;
console.log(calcular(10));
var generar = (datoa,datob) =>{
    var datoc = 5;
    return datoa + datob + datoc;
}
console.log(generar(10,14));


