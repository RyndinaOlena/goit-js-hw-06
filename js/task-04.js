let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]')
const incrementEl = document.querySelector('[data-action="increment"]')
const spanEl = document.getElementById('value')


decrementEl.addEventListener('click', () => {
    spanEl.textContent = counterValue -= 1
})

incrementEl.addEventListener('click', () => {
    spanEl.textContent = counterValue += 1
})