// Tipos de Dados

console.log(typeof(2))
console.log(typeof('2'))

let numeroQuebrado = 2.3
let infitino = Infinity
console.log(numeroQuebrado)
console.log(typeof(numeroQuebrado))
console.log(typeof(infitino))
console.log(infitino)


// Template String ou Interpolação
let nome = 'Pedro'
let sobrenome = 'Lisboa'
console.log(`Olá eu nome é ${nome} ${sobrenome.toUpperCase()}!`)

let nome2 = 'Pedro'

console.log(nome === nome2)
console.log(nome == nome2)
console.log(nome != nome)

console.log(5 <= 10)
console.log(5 == 10)
console.log(10 == '10')
console.log(10 === '10')


let comparacao = 5 === 5
let comparacao2 = 5 != 3
let comparacao3 = 3 != 3
console.log(comparacao || comparacao2)
console.log(comparacao && comparacao2)
console.log(comparacao || comparacao3)