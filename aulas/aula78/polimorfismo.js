function Conta(agencia, conta, saldo) {
     this.agencia = agencia;
     this.conta = conta;
     this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
     if(valor > this.saldo) {
          console.log(`Saldo insuficiente: ${this.saldo}`)
          return;
     }

     this.saldo -= valor;
     this.verSaldo();
};

conta.prototype.depositar = function(valor) {
     this.saldo += valor;
     this.verSaldo();
}

conta.prototype.verSaldo = function() {
     console.log(
        `Ag/c ${this.agencia} / ${this.conta0}`
        `Saldo: R$${this.saldo.toFixed(2)}`
     );
};

const conta1 = new Conta(11, 22, 43)