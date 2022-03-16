let input = document.querySelector('input');
let btn = document.querySelector('button');
const form = document.querySelector('form');
let ul = document.querySelector('.todos')
let icon = document.querySelector('.todo-item_icon');
let title = document.querySelector('.todo-item_title');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let val = input.value.trim();
    if(val) {
        addTodoList({
            val: val
        });
        saveTodoList();
    }
    input.value = '';
});

function saveTodoList() {
    let todoList = document.querySelectorAll('li');
    let todoListDOM = [];
    todoList.forEach((item) => {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

        todoListDOM.push({
            text,
            status
        })
    });

    localStorage.setItem('todoList', JSON.stringify(todoListDOM));
}

function addTodoList(todo) {
    let li = document.createElement('li');
    li.setAttribute('class', 'todo-item');
    if(todo.status === 'todo-item completed') {
        li.setAttribute('class', 'todo-item completed');
    }
    li.innerHTML = `
                <span class="todo-item_title">${todo.val}</span>
                <i class="fa-solid fa-trash todo-item_icon"></i>
    `;

    li.addEventListener('click', function() {
        this.classList.toggle('completed');
        saveTodoList();
    });

    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
    })

    ul.appendChild(li);
}

function init() {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.forEach((item) => {
        addTodoList({
            val: item.text,
            status: item.status
        });
    })
}

init();