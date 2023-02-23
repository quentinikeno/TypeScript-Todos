"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(event) {
    event.preventDefault();
    const newTodoText = input.value;
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLi.append(newTodoText);
    newLi.append(checkbox);
    list.append(newLi);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", () => {
// 	alert(input.value);
// 	input.value = "";
// });
