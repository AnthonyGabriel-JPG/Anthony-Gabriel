// Seleciona os elementos do HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Cria o elemento da lista (li)
    const li = document.createElement('li');
    
    // Define o conteúdo interno do li
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="btn-delete">Excluir</button>
    `;

    // Adiciona o evento de clique no botão de excluir específico desta tarefa
    const deleteBtn = li.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // Adiciona a tarefa na lista (ul)
    taskList.appendChild(li);

    // Limpa o campo de entrada e foca nele novamente
    taskInput.value = '';
    taskInput.focus();
}

// Escuta o clique no botão adicionar
addBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa pressionando a tecla "Enter"
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
