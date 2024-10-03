//dom 

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const result = document.querySelector('#resultado');
const calc = document.querySelector('#calcular');

//eventos

calc.addEventListener('click', ()=>{
    let pe = peso.value
    let alt = altura.value
    
    let valorfinal = pe / (alt * alt)

    if(valorfinal > 34){
        result.value = "IMC: " + valorfinal.toFixed(2) + ". Obesidade!"
    }
    if(valorfinal >=30 && valorfinal <=34){
        result.value = "IMC: " + valorfinal.toFixed(2) + ". Sobrepeso II!"
    }
    if(valorfinal >=25 && valorfinal <=29.99){
        result.value = "IMC: " + valorfinal.toFixed(2) + ". Sobrepeso!"
    }
    if(valorfinal >=18.5 && valorfinal <=24.99){
        result.value = "IMC: " + valorfinal.toFixed(2) + ". Normal!"
    }
    if(valorfinal < 18.5){
        result.value = "IMC: " + valorfinal.toFixed(2) + ". Ext. Magreza!"
    }

    //result.value = valorfinal.toFixed(2)
})