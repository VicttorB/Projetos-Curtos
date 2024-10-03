//DOM

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#r')


//evento

botao.addEventListener('click',imc)


//funções

function imc(){
    let massa = peso.value 
    let tamanho = Number(altura.value)

   let imcfinal = massa/(tamanho*tamanho)

   resultado.textContent = "Seu imc é : "+imcfinal.toFixed(2)
}