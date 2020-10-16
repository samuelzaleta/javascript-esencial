"use strict"
var platillos = ['Tacos','Pizza','Pasta', 'lazaña'];
var bebidas =new Array ('Horchata','Jamaica', 'Medias de seda');

console.log(Array.isArray(platillos),platillos, bebidas);
var longArray = platillos.length;

console.log('Hay ' + longArray +' platillos en el menu');

var platillo =platillos[1];

console.log(platillo);

var menu = [platillos,bebidas];

console.log(menu[1][1]);

console.log(platillos);
platillos.push('Tostadas');//agrega
console.log(platillos);
platillos.pop();//elimina 
platillos.pop();
console.log(platillos);

var mensaje =platillos.join(); //une
console.log(mensaje);

var mensaje ="pizza, lazaña, tacos";
//var comida = mensaje.split(', ');
//console.log(comida);
//array.from
var platillosHTML = Array.from(document.querySelectorAll('.platillos p'));
var comida = platillosHTML.map(comida => comida.textContent); //evitando el for

console.log(platillosHTML);

//of
//var comidad =Array.of()

console.log(platillos);
console.log(platillos.sort());
console.log(platillos.reverse());

//var platillo1 = null;
//var platillo2 = null;
//var platillo3 = null;
var [platillo1, platillo2, platillo3] =platillos;
console.log(platillo1, platillo2, platillo3)
//for in
for (let i in platillos) {
      console.log(platillos[i])
}
//for each
platillos.forEach(plat => {
    console.log(plat); 
})
platillos.forEach((plat, i) => {
    console.log(i, plat); 
})
console.log(platillos);
//buscar un arreglo sin for
var pElegido = platillos.find(plat => plat =="Pasta");
console.log(pElegido);

var numPlatilo = platillos.findIndex(plat => plat =='Tacos');
console.log('platillo numero ', numPlatilo);

//filtrar un arreglo
var menu2 =[{
    nombre:'Ceviche',
    precio:20,
    pais:'Peru'
},{
    nombre:'Tacos',
    precio:10,
    pais:'Mexico'
},{
    nombre:'Pasta',
    precio:50,
    pais:'Italia'
},{
    nombre:'Quesadillas',
    precio:15,
    pais:'Mexico'
}]

var resultado = null;

resultado =menu2.filter(platillo => platillo.pais == 'Mexico');
console.log(resultado);

var resultado = null;

//resultado = menu2.some(platillo => platillo.precio <= 10);
//console.log(resultado);
resultado = menu2.every(platillo => platillo.precio >= 10);
console.log(resultado);

