const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
    console.log('El botn se ha pulsado');
})
boton.addEventListener('mouseover', function(){
    console.log('el mouse esta sobre el boton');
})
boton.addEventListener('mouseout', function(){
    console.log('el mouse esta fuera del boton');
})