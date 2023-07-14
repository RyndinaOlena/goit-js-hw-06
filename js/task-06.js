const InputEl = document.getElementById('validation-input')
InputEl.addEventListener('blur', changeBorderInput)
function changeBorderInput(e) {
    const eventInput = e.currentTarget.value.length
    const dataLength = parseInt(InputEl.getAttribute('data-length'))
    if (eventInput === dataLength) {
        InputEl.classList.add('valid')
        InputEl.classList.remove('invalid')

    } else {
        InputEl.classList.add('invalid')
        InputEl.classList.remove('valid')
    }
}