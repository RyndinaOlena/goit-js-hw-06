const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', sendForm)
function sendForm(event) {
    event.preventDefault();
    formEl.reset();

    const formElements = event.currentTarget.elements
    const mailEl = formElements.email.value
    const passwordEl = formElements.password.value

    const formData = {
        mailEl,
        passwordEl,
    }

    if (mailEl && passwordEl === '') {
        alert('error')
        return
    } else {
        console.log(formData)
    }
}

