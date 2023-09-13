// Marco zero = 1/01/1970
// para mandar parametros do dia e hora que você quiser A, M, D, H, m, S, MS
//const tresHoras = 60 * 60 * 3;
//const data = new Date(0 + tresHoras);
//console.log(data)

function zeroAEsquerda(num) {
    return num >= 10 ? num:`0${num}`
}

function formatadata(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}
const data = new Date();
const dataBrasil = formatadata(data)
console.log(dataBrasil)