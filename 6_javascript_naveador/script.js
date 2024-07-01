// - Movendo pelo DOM
//console.log(document.body.childNodes[1].textContent)

// 2 - Selecionando por TAG

const listaItens = document.getElementsByTagName('li')
console.log(listaItens)


// 3 - Selecionando por ID

const titulo = document.getElementById('titulo')
console.log(titulo)

// 4 - Selecionando por Classe
const produto = document.getElementsByClassName('produto')
console.log(produto)

// 5 - Selecionando elementos por CSS
const produtos = document.querySelectorAll('.produto')
console.log(produtos)
const titulo2 = document.querySelector('#titulo')
console.log(titulo2)

// 6 - Alterando elementos com JS  insertBeferores
// Criando uma paragráfo
const textoDoP = 'Esse é um texto para ser colocado no paragrafo.'
const p = document.createElement('p')
p.textContent = textoDoP
const titulo3 = titulo2.parentElement
titulo3.insertBefore(p, titulo2)

// 7 - AppendChild
const links = document.querySelector('nav ul')
const novoLink = document.createElement('li')
links.appendChild(novoLink)

const textoNovoLink = 'Sobre'
novoLink.textContent = textoNovoLink

// 8 - replaceChild
const h2 = document.createElement('h2')
h2.textContent = 'Meu novo Título!'

titulo3.replaceChild(h2, titulo)

// 9 - Trabalhando com atributos
const primeiroLinkl = links.querySelector('a')
primeiroLinkl.setAttribute('href', 'http://www.google.com.br')
primeiroLinkl.setAttribute('target', '_blank')

console.log(primeiroLinkl.getAttribute('href'))

// 10 - altura e largura
const rodaPe = document.querySelector('footer')
console.log(rodaPe.offsetHeight)
console.log(rodaPe.offsetWidth)

// 12 - CSS com  JS
const navegacao = document.querySelector('nav')
navegacao.style.backgroundColor = 'blue'
navegacao.style.color = 'white'

const letra = document.querySelector('nav a')
