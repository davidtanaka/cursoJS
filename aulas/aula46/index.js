function retornaHora( ) {
    let data = new Date();
  
        return data.toLocaleTimesString('pt-BR', {
        hour12: false
    });
}

setInterval(function (){
    console.log(retornaHora());
}, 1000);