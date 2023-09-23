/*const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro)*/

const pessoas =  [
    {nome: 'davi', idade: 15},
    {nome: 'claudia', idade: 42},
    {nome: 'mauro', idade: 58},
    {nome: 'julia', idade: 16},
    {nome: 'joao', idade: 13},
    {nome: 'andrei', idade:21},
]
const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({idade: obj.idade}))
const comIds = pessoas.map(function(obj, indice) {
    obj.id = (indice + 1) * 1000;
    return obj;
});
console.log(comIds)