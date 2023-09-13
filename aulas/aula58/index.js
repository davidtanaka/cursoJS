// Função construtora -> Objetos

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function () {
        console.log(this.nome + ': Eu sou um metodo')
    }

}

const p1 = new Pessoa('Davi', 'Tanaka')
const p2 = new Pessoa('Paulo', 'otávio')

p2.metodo()
