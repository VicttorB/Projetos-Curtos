//dom

const lamp = document.querySelector('#lamp')
const btLigar = document.querySelector('#ligar')
const btApagar = document.querySelector('#apagar')

//Eventos

btLigar.addEventListener('click',acender)
btApagar.addEventListener('click',desligar)
lamp.addEventListener('dblclick',quebrar)

//Funções

function acender(){
    lamp.src="images/acesa.gif"
}
function desligar(){
    lamp.src="images/apagada.gif"
}
function quebrar(){
    lamp.src="images/quebrada.jpg"
}