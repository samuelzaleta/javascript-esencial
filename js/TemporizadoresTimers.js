"use strict"
//setIntervarl
//SetTimeout
var temporizador = setInterval(function(){
    setColor();
}, 3000)
function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor =pagina.style.backgroundColor == 'blue'? 'green':'blue';
}
function stopChangeColor(){
    clearInterval(temporizador)
}