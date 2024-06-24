let m = 11

if (m < 10) {
    console.log('É menor que 10')
}else if (m == 10){
    console.log('São iguais')
}else{
    console.log('É maior que 10')
}

//repetição

let contador = 1
for (let i = 0; i < 10; i++){

    console.log(contador)
    contador += 1
}

let flag = true
let contador2 = 1
while(flag){
    console.log(`${contador2}`)
    contador2 += 1

    if (contador2 == 13){
        flag = false
    }
}


