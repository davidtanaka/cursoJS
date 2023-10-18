const pessoas = [
     {id: 3, noome: 'Davi'},
     {id: 2, noome: 'Claudia'},
     {id: 1, noome: 'Mauro'},
];

const novas_pessoas = new Map();
for (const pessoa of pessoas) {
     const {id} = pessoa;
     novas_pessoas.set(id, {...pessoas});
}

console.log(novas_pessoas)