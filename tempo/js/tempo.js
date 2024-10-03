//DOM

const key = '3d0737d75d531c87bf65972a17f60380'
const cidade = document.querySelector('.input-cidade')
const btn = document.querySelector('.botao-busca')
const nomeCidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const imagem = document.querySelector('.img-previsao')
const previsao = document.querySelector('.texto-previsao')

//evento

btn.addEventListener('click',cliquebotao)

//funções

function cliquebotao(){
    var city = cidade.value
    buscarCidade(city)
}

async function buscarCidade(city){
    
    const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`).then(resposta=>resposta.json())

    console.log(resultado)

    exibir(resultado)

}

function exibir(resultado){
    nomeCidade.innerHTML = " Tempo em " +  resultado.name
    temperatura.innerHTML = Math.ceil(resultado.main.temp) +"ºC"
    previsao.innerHTML = resultado.weather[0].description 

}