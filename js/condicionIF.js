"use strict"
var dato1 = 100;
var dato2 = 20;
var dato3 = 8;
var resultados  = 'Sin datos';
// haz una planeacion adecuada de tu estrctura de datos pues el codigo resultará complejo
if (dato1 > dato2) {
    resultados = 'la condición se cumplio';
} else if (dato1 == dato2) {
    resultados = 'Segunda evaluación verdadera'
} 
else{
    resultados = 'La condición no e cumplio';
}
console.log('El resultado de las condiciones de if es '+ resultados);

//if aninado
if (dato1 > dato2) {
    resultados = 'Se cumplio la condicion';
    if (dato3 < dato2) {
        resultados = 'Evaluacion de datos anidada';
    }else {
        resultados = 'Evaliacion de datos anindada un valida';

    }
} else resultados ='evaucion anidada invalida';

console.log(resultados);

