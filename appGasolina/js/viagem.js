//DOM

const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//EVENTO

calcular.addEventListener('click', ()=>{
   
    let dist = distancia.value
    let rend = rendimento.value
    let pr = preco.value
   
    let valorFinal = (dist/rend)*pr 

    resultado.value = "R$ " +valorFinal.toFixed(2)
})