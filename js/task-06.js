const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputValidation);

const dataLengthValue = validationInput.dataset.length;


function onInputValidation(event) {
    
    if (event.currentTarget.value.length===Number(dataLengthValue)) {
        validationInput.classList.remove("invalid");
        validationInput.classList.add("valid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
}