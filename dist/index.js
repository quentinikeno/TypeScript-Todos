"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
function handleSubmit(event) {
    event.preventDefault;
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", () => {
// 	alert(input.value);
// 	input.value = "";
// });
