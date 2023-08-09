let counterValue = 0; 
const value = document.querySelector("#value");

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener("click", subtraction);


function subtraction() {
    counterValue -= 1;
    value.textContent = counterValue;
}

buttonIncrement.addEventListener("click", add);

function add() {
    counterValue += 1;
    value.textContent = counterValue;
}

