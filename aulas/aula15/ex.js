const numero = Number(prompt('digite seu numero:'));
const numbertitle = document.getElementById('ntitle');
const text = document.getElementById('text');

numbertitle.innerHTML = numero;
text.innerHTML = `raiz quadrada: ${numero ** 0.5} </br>`
text.innerHTML += `${numero} é inteiro: ${Number. isInteger(numero)}</br>`
text.innerHTML += `É NaN: ${Number. isNaN(numero)} </br>`
text.innerHTML += `arredondando para baixo fica: ${Math.floor(numero)}</br>`
text.innerHTML += `arredondando para cima fica: ${Math.ceil(numero)} </br>`
text.innerHTML += `com duas casas decimais:  ${numero.toFixed(2)}`
