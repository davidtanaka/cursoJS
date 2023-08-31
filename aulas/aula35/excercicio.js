const elementos  = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'footer', texto: 'frase3'},
    {tag: 'section', texto: 'frase4'},
]

const contaneir = document.querySelector('.contaneir')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let p = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagCriada);

}

contaneir.appendChild(div);


/*
const contaneir = document.querySelector('.contaneir')
const div = document.createElement('div')

for (let i = 0; i <= 4; i++) {
    const elementos = [
        {tag: 'p', texto: 'frase 1'},
        {tag:'div', texto: 'frase 2'},
        {tag:'footer', texto: 'frase 3'},
        {tag:'section', texto: 'frase 4'},
    ]
}

Section.h1.innerHTML = (i, contaneir);

const elementos  = [
    {tag: 'p', texto: 'frase1'},
    {tag: 'div', texto: 'frase2'},
    {tag: 'footer', texto: 'frase3'},
    {tag: 'section', texto: 'frase4'},
]

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let p = document.createElement(tag);
    tagcriada.innerHTML = texto;
    div.appendChild(tagcriada);

}

contaneir.appendChild(div);



const h1 = document.querySelector('.contaneir h1');


for(let i = 0; i <= 4; i++){
    const contaneir  = [
        {tag: 'p', texto: 'frase1'},
        {tag: 'div', texto: 'frase2'},
        {tag: 'footer', texto: 'frase3'},
        {tag: 'section', texto: 'frase4'},
    ]
}

Section.h1.innerHTML = (i, contaneir);*/

