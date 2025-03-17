document.addEventListener("DOMContentLoaded", loadTodos);
document.getElementById("add-btn").addEventListener("click", addTodo);

function addTodo() {
    let input = document.getElementById("todo-input");
    let task = input.value.trim();

    if (task === "") return;

    let todoList = document.getElementById("todo-list");

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete-btn">X</button>
    `;

    li.addEventListener("click", toggleComplete);
    li.querySelector(".delete-btn").addEventListener("click", deleteTodo);

    todoList.appendChild(li);
    saveTodos();

    input.value = "";
}

function toggleComplete(event) {
    if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("completed");
        saveTodos();
    }
}

function deleteTodo(event) {
    event.stopPropagation(); // Prevent toggling when deleting
    event.target.parentElement.remove();
    saveTodos();
}

function saveTodos() {
    let todos = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        todos.push({
            text: li.querySelector("span").innerText,
            completed: li.querySelector("span").classList.contains("completed")
        });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let todoList = document.getElementById("todo-list");

    todos.forEach(todo => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}">${todo.text}</span>
            <button class="delete-btn">X</button>
        `;

        li.addEventListener("click", toggleComplete);
        li.querySelector(".delete-btn").addEventListener("click", deleteTodo);
        todoList.appendChild(li);
    });
}
