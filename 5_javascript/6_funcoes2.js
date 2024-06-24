function primeiraFuncao(){
    console.log('Essa é minha primeira função!')
}

let funcaoEmUmaVariavel = function(){
    console.log('Essa é uma função dentro de váriavel!')
}


function funcaoComParametro(texto){
    console.log(`${texto}`)
}


primeiraFuncao()
funcaoEmUmaVariavel()
funcaoComParametro('Oi gente!')

// return
const a = 10
const b = 10
const c = 10
const d = 10

function soma(a, b, c, d){
    return a + b + c + d
}


let resultado = soma(a, b, d, d)
console.log(resultado)