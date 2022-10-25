const todoForm = document.querySelector('#todo-form');
const todoTarefa = document.querySelector('#tarefa');
const todoList = document.querySelector('#todo-list');
const todoFiltro = document.querySelector('#filtro');
const todoEdit = document.querySelector('#edit');
const todoCancelBtn = document.querySelector('#cancelar');

const saveTodo = (text) => {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h4')
    todoTitle.innerText =(text)
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.innerHTML ='<i class="fas fa-check"></i>'
    doneBtn.classList.add('finish-todo')
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.innerHTML ='<i class="fas fa-pen"></i>'
    editBtn.classList.add('edit-todo')
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML ='<i class="fab fa-xing"></i>'
    deleteBtn.classList.add('remove-todo')
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);

    todoTarefa.value = '';

    console.log(todo)
}


todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const inputValue = todoTarefa.value

    if(inputValue){
        saveTodo(inputValue);
    }
});

document.addEventListener('click', (e)=>{

    const targetEl = e.target;
    const parentEl = targetEl.closest('div');

    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done');
    }
});