//for (let i = 0; i <= 50; i+= 10) {
 //   console.log(`linha ${i}`)
//}
numePar = 0
numeImpar = 0
for (let i = 0; i <= 10; i++  ) {
    console.log(`linha ${i}`)
    for (let c = 0; c < i; c++) {
            if (i % 2 === 0) {
            numePar = c } else {
            numeImpar = c 
    }}
}
console.log(`Temos ${numePar} numeros PARES`)
console.log(`Temos ${numeImpar} numeros IMPARES`)