"use strict"
const video =  document.querySelector('.video');
video.addEventListener('play',function(){
    console.log('el video ha iniciado');
})
video.addEventListener('seeking',function(){
    console.log('Se esta buscando en el video');
})
video.addEventListener('ended',function(){
    console.log('El video ha terminado');
})