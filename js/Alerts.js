"use strict"
const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    alert('Estas seguro?:v');
})
boton.addEventListener('click', function(){
    let resultado = confirm('Estas seguro?:v');
    console.log(resultado);
    if(resultado){
        window.location ="https://www.youtube.com/";
    }else window.location ="https://www.google.com.mx/?hl=es-419";
})
/* 
boton.addEventListener('click', function(){
    let resultado = confirm('Estas seguro?:v');
    console.log(resultado);
    let email =prompt("dame email");
})
*/