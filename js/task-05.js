const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", nameChange);

function nameChange(event) {
    output.textContent = event.currentTarget.value;
if (output.textContent==="") {
    output.textContent = "Anonymous";
}
}