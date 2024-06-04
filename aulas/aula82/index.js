class DispositivoEletronico {
     constructor(nome) {
          this.nome = nome;
          this.ligado = false;
     }

     ligar() {
          if(this.ligado) {
               console.log(`${this.nome} já esta ligado`);
               return;
          }

          this.ligado = true
     }

     desligar() {
          if(!this.ligado) {
               console.log(`${this.nome} já esta ligado`);
               return;
          }

          this.ligado = false
     }
}

const d1 = new DispositivoEletronico("Celular");
d1.ligar();
d1.ligar();
console.log(d1);