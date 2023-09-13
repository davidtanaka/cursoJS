const falaOi = function () {
    console.log('oii');
}

const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
}

const funcaoArrow = () => {
    console.log('sou uma funcao');
}
executaFuncao(souUmDado);