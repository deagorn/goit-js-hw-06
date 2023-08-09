const btnSubmit = document.querySelector(".login-form");
const formData = {};

btnSubmit.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
//   const {
//     elements: { username, password }
//   } = event.currentTarget.elements;
    
    const arr = event.currentTarget.elements;

    for (let i = 0; i < arr.length-1; i++){
        formData[arr[i].name] = arr[i].value;
    }
 
    if (formData.email === '' || formData.password === '') {
        alert('All fields must be filled')
    } else {
        console.log(formData);
        btnSubmit.reset();
    }
  
    
}
