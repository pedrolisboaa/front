// Programação assincrona

// 1 - setTimeOut
/*
console.log('Vou executar primeiro!')

setTimeout(function(){
    console.log('Eu sou a assíncrona, vou segurar o código por 3 segundos.')
}, 3000)

console.log('Vou executar depois de trÊs segundos da primeira! ')

*/

// 2 - setInterval

/*
console.log('Ainda não começou!')

setInterval(function(){
    console.log('Intervalo')
}, 2000)

console.log('Ainda não começou2!')
*/

// Promise

const promessa = Promise.resolve(5 + 5)
console.log('Um código')

promessa.then((valor) => {
    console.log(`A soma é ${valor}`)
    return valor
}).then((valor) => valor - 1).then((valor) => console.log(`Agora é ${valor}`))
    

console.log('Outro código')