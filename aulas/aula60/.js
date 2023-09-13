// Função Geradora
function retorna(max) {
    if (max >= 1000) return;
    max++;
    console.log(max);
    retorna(max);
}
retorna(0);

/* function recursiva (max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0); */