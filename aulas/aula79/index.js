function criaPessoa(nome, sobrenome){
     const pessoaPrototype = {
          falar() {
               console.log(`${this.nome} está a falar`);
          },

          comer() {
               console.log(`${this.nome} está comendo`);
          },

          beber() {
               console.log(`${this.nome} está bebendo`);
          },
     };

     return Object.create(pessoaPrototype, {
          nome: {value: nome},
          sobrenome: {value: sobrenome}
     });
}

const p1 = criapessoa('Davi', 'Tanaka')
