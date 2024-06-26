const pessoa = {
    nome: 'Pedro',
    sexo: 'Masculino',
    idade: '31'
}

console.log(pessoa.nome)

pessoa.peso = 120

console.log(pessoa.peso)

const teste = {
    a: 'teste',
    b: true
}

const teste2 = {
    c: []
}

Object.assign(teste2, teste)
console.log(teste2)

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.entries(pessoa))


const comidas = ['pizza', 'churrasco', 'cachorro quente', 'pizza']

for (let i = 0; i < comidas.length; i++){
    console.log(comidas[i])
}

const ultimaComida = comidas.pop()
console.log(ultimaComida)
console.log(comidas)
comidas.unshift('coxinha')
console.log(comidas)

const localDaPizza = comidas.indexOf('pizza')
console.log(localDaPizza)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const testeSlcie = numeros.slice(2, 4)
console.log(testeSlcie)


numeros.forEach((numero) =>{
    console.log(`O número é ${numero}`)
})

const usuarios = [
    {nome: 'Pedro', sobrenome: 'Lisboa', idade: 31},
    {nome: 'Olivia', sobrenome: 'Lisboa', idade: 3},
    {nome: 'Rosangela', sobrenome: 'Lisboa', idade: 65},
    {nome: 'Ronaldo', sobrenome: 'Lisboa', idade: 62},
]

usuarios.forEach((usuario) => {
    console.log(`Mostrando usuários ${usuario.nome.toUpperCase()} ${usuario.sobrenome} com idade de ${usuario.idade}. `)
})

console.log(comidas)
console.log(comidas.includes('pizza'))



const banana = '   banana    '
console.log(banana)
console.log(banana.trim())

// destructuring

const pessoa = {
    nome: 'pedro',
    sobrenome: 'lisboa',
    profissao: 'programador'
}

