/// Funções geradoras


function* gerador() {
    yield 'valor 1';
    // qualquer coddigo.....
    yield 'valor 2';
    // qualquer codigo......
    yield 'valor 3'
}
const gerador1 = gerador();
console.log(gerador1.next().value)
console.log(gerador1.next().value)
console.log(gerador1.next().value)

function* gerador2() {
    yield 1;
    // .........
    yield 2;
    //..........
    yield 3;
}
const gerador = gerador2();
console.log(gerador.next().value)
console.log(gerador.next().value)
console.log(gerador.next().value)