// defineProperty -> getter e setters
function Produto(nome, preço, estoque) {
    this.nome = nome; 
    this.preço =  preço;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        configurable: true, // Valor
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Value invalid!!')
                return;
            }
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('camiseta', 20, 3);
p1.estoque = 'O valor que eu quero'
console.log(p1.estoque)