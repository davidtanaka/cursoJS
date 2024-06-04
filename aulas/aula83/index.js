class ControleRemoto {
     constructor(tv) {
          this.tv = tv;
          this.volume = 0;
     }

     aumentarVolume() {
          this.volume += 2;
     }
     diminuirVolume() {
          this.volume -=2;
     }

     static trocaPilha() {
     console.log('pilha trocada')
}
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume(); 
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)


const controle2 = new ControleRemoto('SAMSUNG')
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.diminuirVolume();
console.log(controle2)