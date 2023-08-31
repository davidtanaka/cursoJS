function reotrnaFuncao() {
    const nome = 'Davi';
    return function(){
        return nome;
    };
}

const funcao = reotrnaFuncao();
console.log(funcao())