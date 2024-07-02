// 1 - Adicionando eventos

const botao = document.querySelector('#botao')

botao.addEventListener('click', function(){
    console.log('AI Zé DA MANDA!')
})

// 2 - Removendo eventos
const botao2 = document.querySelector('#btn')
const botao3 = document.querySelector('#sem-evento')


function imprimir(){
    console.log('TESTE!!')
}

botao2.addEventListener('click', imprimir)

botao3.addEventListener('click',function(){
    console.log('Função removida')
    botao2.removeEventListener('click', imprimir)
})


// Argumento do evento

const titulo = document.querySelector('h1')
titulo.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
})

// Parando propagação
const containerBtn = document.querySelector('#btn-container')
const btnDentro = document.querySelector('#div-btn')

containerBtn.addEventListener('click', function(){
    console.log('Cliquei na div!')
})

btnDentro.addEventListener('click', function(e){
    e.stopPropagation()
    console.log('Cliquei no botao!')
})

// Retirando evento default 
const link = document.querySelector('a')
link.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log('Tirei o evento do link')
})

// Eventos de teclas
document.addEventListener('keyup', (e) =>{
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) =>{
    console.log(`Apertou a tecla ${e.key}`)
})

// Eventos dos mouse
