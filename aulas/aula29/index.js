const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
case 0: 
diaSemanaTexto = 'domingo';
break;

case 1: 
diaSemanaTexto = 'segunda';
break;
case 2: 
diaSemanaTexto = 'terça';
break;
case 3: 
diaSemanaTexto = 'quarta';
break;
case 4: 
diaSemanaTexto = 'quinta';
break;
case 5: 
diaSemanaTexto = 'sexta';
break;
 case 6: 
diaSemanaTexto = 'sabado';
break; 
}

/*if (diaSemana === 0){
    diaSemanaTexto = 'domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'segunda'
}  else if (diaSemana === 2) {
    diaSemanaTexto = 'terça'
} else if (diaSemana === 3) {
    diaSemanaTexto = 'quarta'
} else if (diaSemana === 4) {
    diaSemanaTexto = 'quinta'
} else if (diaSemana === 5) {
    diaSemanaTexto = 'sexta'
} else if (diaSemana === 6) {
    diaSemanaTexto = 'sabado'
}*/



console.log(diaSemana(), diaSemanaTexto)