function produto(nome, preço, estoque) {
    this.nome = nome; 
    this.preço =  preço;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor
        writable: false, // Pode alterar
        configurable: false // Configurável 
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, // Mostra a chave
        value: nome, // Valor
        writable: false, // Pode alterar
        configurable: false // Configurável 
        },
        preço: {
        enumerable: true, // Mostra a chave
        value: preço, // Valor
        writable: false, // Pode alterar
        configurable: false // Configurável 
        }
    });
}

const p1 = new produto('camiseta', 20, 3);
p1.estoque =  100
console.log(p1)