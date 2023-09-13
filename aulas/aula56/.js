function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return`${nome} está falando ${assunto}.`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('DAVI', 'Tanaka')
console.log(p2.fala('Falando sobre meu amor'))