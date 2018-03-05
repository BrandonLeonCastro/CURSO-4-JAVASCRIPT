var num1 = document.getElementById('')
num1.addEventListener('click',function(){
escribir()
})

function escribir(numero){
var pantalla = document.getElementById('display')
pantalla.innerHTML += numero
}

function reducir(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(0.95,0.95)")
}

function engrandecer(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(1,1)")
}
