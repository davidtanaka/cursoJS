function Produto(nome, preco){
     this.nome= nome;
     this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
     this.preco = this.preco - (this.preco * (percentual / 1000))
};

Produto.prototype.aumento = function(percentual){
     this.preco = this.preco + (this.preco * (percentual / 1000))
};

const p1 = new Produto('Camiseta', 50)

const p2 = {
     nome: 'Caneca',
     preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

console.log(p1);
console.log(p2);

/*const objA = {
     chaveA: 'A'
     // __proto__: Object.prototype
};

const objB = {
     chaveB: 'B'
     // __proto__: objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA)*/