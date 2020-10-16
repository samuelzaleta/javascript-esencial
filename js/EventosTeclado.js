"us strict"
//keydown
//keypress
//keyup
window.addEventListener('keydown', function(event){
    console.log('pulsando tecla');
    console.log(String.fromCharCode(event.keyCode));
})
window.addEventListener('keypress', function(event){
    console.log('Tecla pulsada');
})
window.addEventListener('keyup', function(event){
    console.log('Tecla liberada');
})