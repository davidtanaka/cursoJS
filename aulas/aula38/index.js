const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelector('p')

const estilosBody = getComputedStyle(documento.body);
const backgroundcolorbody = estilosBody.backgroundColor;


for (let p of ps) {
    p.style.backgroundColor = backgroundcolorbody;
}