/*const nome = 'davi'

let i = 0;

while (i < nome.length) {
    console.log(i)
    i++;
}*/

function random(min, max) {
    let r =  Math.random() * (max - min) + min;
    return Math.floor(r);
}

let min = 1;
let max = 50;
let rand = random(min, max)

while (rand !==10) {
    rand = random(min, max); 
    console.log(rand)
}