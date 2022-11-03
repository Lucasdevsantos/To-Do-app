const todoForm = document.querySelector('#todo-form');
const todoTarefa = document.querySelector('#tarefa');
const todoList = document.querySelector('#list-todo');
const todoFiltro = document.querySelector('#todo-filtro');
const todoEdit = document.querySelector('#edit-form');
const todoPesquisar = document.querySelector('#pesquisa-form');
const todoAdcTarefa = document.querySelector('#tarefa-form')
const cancelBtn = document.querySelector('#cancelar')
const editInput = document.querySelector('#edit')
const editForm = document.querySelector('#edit-check')

let oldInputValue;

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
    todoTarefa.focus();

    console.log(todo)
};

const toggleForms = () =>{
    if(todoPesquisar.style.display === "none"){
        todoPesquisar.style.display = "block";
    } else{
        todoPesquisar.style.display = "none";
    };

    if(todoFiltro.style.display === "none"){
        todoFiltro.style.display = "block";
    } else{
        todoFiltro.style.display = "none";
    };

    if(todoAdcTarefa.style.display === "none"){
        todoAdcTarefa.style.display = "block";
    } else{
        todoAdcTarefa.style.display = "none";
    };

    if(todoEdit.style.display === "block"){
        todoEdit.style.display = "none";
    } else{
        todoEdit.style.display = "block";
    };
};


const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h4')
        console.log(todoTitle, text);

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text;
        }
    });
};



todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const inputValue = todoTarefa.value

    if(inputValue){
        saveTodo(inputValue);
    };
});

document.addEventListener('click', (e)=>{

    const targetEl = e.target;
    const parentEl = targetEl.closest('div');
    let todoTitle;

    if(parentEl && parentEl.querySelector('h4')){
        todoTitle = parentEl.querySelector('h4').innerText;
    }

    if(targetEl.classList.contains('finish-todo')){
        parentEl.classList.toggle('done');
    }

    if(targetEl.classList.contains('remove-todo')){
        parentEl.remove();
    }

    if(targetEl.classList.contains('edit-todo')){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener('click', (e) => {
    e.preventDefault();

    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue);
    }
    toggleForms();

});