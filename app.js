var num1 = document.getElementById('1')
num1.addEventListener('click',function(){
escribir(1)
})

function escribir(numero){
var pantalla = document.getElementById('display')
pantalla.innerHTML = numero
}
