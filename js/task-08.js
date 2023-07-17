const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', sendForm)
function sendForm(event) {
    event.preventDefault();


    const formElements = event.currentTarget.elements
    const mail = formElements.email.value
    const password = formElements.password.value

    const formData = {
        mail,
        password,
    }

    if (mail === "" || password === '') {
        return alert('error')
    } else {
        console.log(formData)
        formEl.reset();
    }
}

