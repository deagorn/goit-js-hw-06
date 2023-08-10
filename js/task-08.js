const btnSubmit = document.querySelector(".login-form");

btnSubmit.addEventListener("submit", onSubmit);

function onSubmit(event) {
    event.preventDefault();
    
    
    const { email, password } = event.currentTarget.elements;

    const formData = {
        email: email.value,
        password: password.value
    };
 
    if (formData.email === '' || formData.password === '') {
        alert('All fields must be filled')
    } else {
        console.log(formData);
        btnSubmit.reset();
    }
  
    
}
