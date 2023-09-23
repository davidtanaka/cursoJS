const pessoas =  [
    {nome: 'davi', idade: 15},
    {nome: 'claudia', idade: 42},
    {nome: 'mauro', idade: 58},
    {nome: 'julia', idade: 16},
    {nome: 'joao', idade: 13},
    {nome: 'andrei', idade:21},
]

const pessoasComMaisDeQuartoze = pessoas.filter(n => n.idade > 14);
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5);
const pessoasQueONomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasQueONomeTerminaComA)

/*const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor =>  valor > 10);
console.log(numerosFiltrados);


const a = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 8, 7, 11, 15, 22, 27];

if (a > 10) {
    let b = []
    return b === valores;
    console.log(b)

}; */
