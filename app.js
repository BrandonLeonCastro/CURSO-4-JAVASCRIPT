var num1 = document.getElementById('1')
num1.addEventListener('click',function(){
escribir(1)
})

function escribir(numero){
var pantalla = document.getElementById('display')
pantalla.innerHTML = numero
}

function engrandecer(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(0.95,0.95)")
}

function reducir(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(1,1)")
}
