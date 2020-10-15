"use strict"

//ciclos definidos 
var producto = 5;
for (let index = 0; index < producto; index++) {
    console.log('index ', index )
    debugger;   
}

while (producto > 0) {
    console.log('Producto vendido')
    producto--;
    debugger;
}
producto = 10;
do{
    console.log('Producto vendido');
    producto--;
    debugger;
}while (producto > 0)


var cuenta = 0;

for (let index = 0; index < 20; index++) {
    if (index % 2 == 0) {
        continue;
    }
    cuenta ++;
    debugger;    
}
console.log('Hay ' + cuenta +  ' numeros impares');
