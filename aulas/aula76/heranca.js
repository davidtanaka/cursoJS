function Produto(nome, preco){
     this.nome = nome;
     this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
     this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
     this.preco -= quantia;
};
function Camiseta(nome, preco, cor){
     Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('GEN', 111);
const camiseta = new Camiseta('REGATA', 7.5, 'Preta');

console.log(produto)
console.log(camiseta)