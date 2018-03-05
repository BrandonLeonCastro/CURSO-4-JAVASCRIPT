var pantalla = document.getElementById('display')

function escribir(numero){
   if (pantalla.innerHTML == 0) {
       pantalla.innerHTML = ""
   }
   pantalla.innerHTML += numero
   pantalla.innerHTML = pantalla.innerHTML.substring(0, 8)
}

function reducir(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(0.95,0.95)")
}

function engrandecer(rr) {
document.getElementById(rr).setAttribute("style", "transform:scale(1,1)")
}

function borrar(numero){
  pantalla.innerHTML = 0
}
