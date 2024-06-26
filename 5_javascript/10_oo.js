const animal = {
    nome: 'rex',

    getNome: function(){
        return this.nome
    },

    setNome: function(nome){
        this.nome = nome
    }
}


console.log(animal.nome)
console.log(animal.getNome())
animal.setNome('Cleiton')
console.log(animal.getNome())

// prototype
const texto = 'pedro lisboa'
console.log(Object.getPrototypeOf(texto))

// Classes Básicas

const cachorro = {
    raca: null,

    getRaca: function (){
        return this.raca
    }
}

const pastorAlemao = Object.create(cachorro)
const bulldog = Object.create(cachorro)
pastorAlemao.raca = 'Pastor Alemão'
bulldog.raca = 'Bulldog'
console.log(pastorAlemao.getRaca())
console.log(bulldog.getRaca())

// Forma com funções construtoras
function criarCachorro(raca, nome){
    const cahorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const viraLata = criarCachorro('bob', 'Vira Lata')
const husky = criarCachorro('polenta', 'Husky')



// Funcão como classe

function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

Cachorro.prototype.daPata = function(){
    console.log(`O ${this.nome} esta dando a patinha.`)
}

const pitbull = new Cachorro('alfredo', 'Pitbull')

console.log(pitbull.nome)
pitbull.daPata()

// Classes de forma mais atual
class Cavalo{
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }

    get exibirTitulo(){
        
    }

    falarRaca(){
        console.log(`Minha raça é ${this.raca}`)
    }
}

const patas = Symbol()
Cavalo.prototype[patas] = 4

const peDePano = new Cavalo('Pé de Pano', 'Quarto de milha')

console.log(peDePano.raca)
peDePano.falarRaca()
console.log(peDePano)
console.log(peDePano[patas])