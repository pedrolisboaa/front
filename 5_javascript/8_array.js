const nomes = ['Pedro', 'do', 'Nascimento', 'Lisboa']

console.log(nomes)
console.log(nomes.length)

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
    
}

nomes.push('Olívia')
console.log(nomes)
nomes.pop()
console.log(nomes)