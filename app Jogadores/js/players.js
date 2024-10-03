//dom

const jogadores = document.querySelector('#images')
const player1 = document.querySelector('#cr7')
const player2 = document.querySelector('#messi')
const player3 = document.querySelector('#haaland')
const player4 = document.querySelector('#neymar')
const player5 = document.querySelector('#dybala')
const player6 = document.querySelector('#mbappe')


//Eventos
player1.addEventListener('click',cr7)
player2.addEventListener('click',messi)
player3.addEventListener('click',haaland)
player4.addEventListener('click',neymar)
player5.addEventListener('click',dybala)
player6.addEventListener('click',mbappe)


//Funções

function cr7(){
    jogadores.src="images/Cr7.png"
}
function messi(){
    jogadores.src="images/messi.png"
}
function haaland(){
    jogadores.src="images/haaland.png"
}
function neymar(){
    jogadores.src="images/Neymar.png"
}
function dybala(){
    jogadores.src="images/dybala.png"
}
function mbappe(){
    jogadores.src="images/Mbappe.png"
}

