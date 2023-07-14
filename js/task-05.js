const inputEl = document.getElementById('name-input')
const spanEl = document.getElementById('name-output')


inputEl.addEventListener('input', (e) => {
    spanEl.textContent = e.currentTarget.value.trim() || 'Annonimus'
})