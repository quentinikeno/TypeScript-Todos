"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    return todosJSON === null ? [] : JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
