

// Selectores
const todoinput = document.querySelector('.list-input');
const todobutton = document.querySelector('.creat-btn');
const todolist = document.querySelector('.todo-list');



// Event listeners
todobutton.addEventListener('click', creatlist);
// todocheck.addEventListener('click', checklist);
todolist.addEventListener('click', deletechecklist);

// Functions

function creatlist(event) {
   event.preventDefault();

    //create div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo-div');

    //create li
    const todoitem = document.createElement('li');
    todoitem.innerText = todoinput.value;
    todoitem.classList.add('todo-item');
    tododiv.appendChild(todoitem);
    todoinput.value = '';


    //create check button
    const todocheck = document.createElement('button');
    todocheck.classList.add('todo-check');
    todocheck.innerHTML = '<i class="fa fa-check"></i>'
    tododiv.appendChild(todocheck);

    //create delete button 
    const tododelete = document.createElement('button');
    tododelete.classList.add('todo-delete');
    tododelete.innerHTML = '<i class="fa fa-trash"></i>'
    tododiv.appendChild(tododelete);


    todolist.appendChild(tododiv);
}

function deletechecklist (e){
    const item = e.target;
    if (item.classList[0] === 'todo-delete'){
        const todolist = item.parentElement;
        todolist.classList.add('fall');
        todolist.addEventListener('transitioned', )
    }
    if (item.classList[0] === 'todo-check')
    {
        const todolist = item.parentElement;
        todolist.classList.toggle('completed', function(){
            todolist.remove();
        }) 
    }
}


