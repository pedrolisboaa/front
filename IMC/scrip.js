const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const botaoCalcular = document.querySelector('#btn-calcular')
const botaoLipar = document.querySelector('#btn-limpar')
const titulo = document.querySelector('.titulo')


// funções
function calcularImc(peso, altura){
    let imc = peso / (altura * altura) 
    imc = imc.toFixed(2)
    return imc
}


// Limpando formulário
botaoLipar.addEventListener('click', () => {
    altura.value = ''
    peso.value = ''
})


// evento de calculo
botaoCalcular.addEventListener('click', function(){
    
    if (!altura || !peso){
        return
    }
    const _altura = + altura.value
    const _peso = + peso.value
    const imc = calcularImc(_peso, _altura)
    

    titulo.textContent = `Seu IMC é ${imc}`

})


