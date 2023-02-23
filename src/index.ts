const btn = document.getElementById("btn")!;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

function handleSubmit(event: SubmitEvent) {
	event.preventDefault;
}

form.addEventListener("submit", handleSubmit);

// btn.addEventListener("click", () => {
// 	alert(input.value);
// 	input.value = "";
// });
