const oi = () =>{
    console.log('Oi')
}

const parOuImpar = (numero) => {
    if (numero % 2 == 0){
        console.log('Par')
    }
    
    else{
        console.log('Impar')
    }
}

const raizQuadrada = (x) => x * x

oi()
parOuImpar(10)
parOuImpar(11)
console.log(raizQuadrada(10))
console.log(raizQuadrada(12))