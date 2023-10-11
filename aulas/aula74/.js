function Pessoa(nome, sobrenome) {
     this.nome = nome;
     this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
     return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Davi', 'T.');
const pessoa2 = new Pessoa('Claudia', 'D.');

console.dir(pessoa1)
console.dir(pessoa2)