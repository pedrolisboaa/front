// Seleções
const container = document.querySelector('#container')
const botao = document.querySelector('button')
const input = document.querySelector('input')
const imagem = document.querySelector('img')

// Eventos

function geradorDeQrCode(){
    const valor = input.value
    if(!valor){
        return
    }

    botao.innerText = 'Gerando código.....'

    imagem.style.display = 'block'
    // API DO QR CODE
    imagem.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${valor}`
     botao.innerText = 'QR Code Gerado.'

}

botao.addEventListener('click', function(e){
    geradorDeQrCode()
})

input.addEventListener('keydown', function(e){
    if (e.code == 'Enter'){
        geradorDeQrCode()
    }
})

// Limpar input
input.addEventListener('keyup', function(){
    if (!input.value){
        imagem.style.display = 'none'
    }
})