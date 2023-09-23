const pessoa1 = new Object();
pessoa1.nome = 'Davi';
pessoa1.sobrenome = 'Dias'
pessoa1.ultimoSobrenome = 'Tanaka';
pessoa1.idade = 15;
pessoa1.falaNome = function() {
    return (`Seu nome é ${this.nome}, e seu nome inteiro é ${this.nome} ${this.sobrenome} ${this.ultimoSobrenome}`);
}
pessoa1.getDataDeNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.falaNome());
console.log(pessoa1.getDataDeNascimento());
for (let chave in pessoa1){
    console.log(chave)
}

/*const pessoa = {
    nome: 'Davi',
    sobrenome: 'tanaka',
}
const chave = pessoa;
delete pessoa.nome
console.log(pessoa); */
