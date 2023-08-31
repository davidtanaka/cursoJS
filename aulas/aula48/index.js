const inputTarefa = document.querySelector('.nova-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
    const li = document.createElement('li')
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += " ";
     const botaoApagar = document.createElement('button');
     botaoApagar.innerText = 'apagar'
     botaoApagar.setAttribute('class', 'apagar')
     botaoApagar.setAttribute('title', 'apagar esta tarefa')
     li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefatexto = tarefa.innerText
        tarefatexto = tarefatexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefatexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicioarTarefassalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

adicioarTarefassalvas()