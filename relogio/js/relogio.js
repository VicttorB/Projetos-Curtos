//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const calendario = document.querySelector('#data')
const fundo = document.querySelector('body')
const dia = document.querySelector('#diaSemana')
const saud = document.querySelector('#Saudacao')
//

const relogio = setInterval(()=>{

    let sistema = new Date()

    let hr = sistema.getHours()
    let min = sistema.getMinutes()
    let seg = sistema.getSeconds()
    let dataDeHoje = sistema.toLocaleDateString('pt-br')
    let diaH = sistema.getDay()
    let sdd = sistema.getHours()

    if (hr<10){
        hr= "0"+hr
    }
    if (min<10){
        min= "0"+min
    }
    if (seg<10){
        seg= "0"+seg
    }

    if(hr>=18 || hr<5){
    fundo.classList.add('darkMode')
    }else{
        fundo.classList.remove('darkMode')
    }
    
    if( hr>=5 || hr<12){
        sdd = "Bom dia"
    }
    
    if( hr>=12 || hr<18){
        sdd = "Boa Tarde"
    }
    
    if( hr>=18 || hr<5){
        sdd = "Boa Noite"
    }
    

    if(diaH == 0){
    diaH = ", hoje é Domingo"
    }
    if(diaH == 1){
    diaH = ", hoje é Segunda"
    }
    if(diaH == 2){
    diaH = ", hoje é Terça"
    }
    if(diaH == 3){
    diaH = ", hoje é Quarta"
    }
    if(diaH == 4){
    diaH = ", hoje é Quinta"
    }
    if(diaH == 5){
    diaH = ", hoje é Sexta"
    }
    if(diaH == 6){
    diaH = ", hoje é Sabado"
    }
        
    

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
    calendario.textContent = dataDeHoje
    dia.textContent = diaH
    saud.textContent = sdd

},1000)
