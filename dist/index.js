"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = [];
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", () => {
// 	alert(input.value);
// 	input.value = "";
// });
