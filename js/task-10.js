function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

// const btnCreate = document.querySelector('[data-create]')
// const btDestroy = document.querySelector('[data-destro]')
// const divControls = document.getElementById('controls')

// btnCreate.addEventListener('click', createBoxes)

// function createBoxes(amount) {
//     let amountEl = [];
//     let width = 30;
//     const input = document.querySelector('input').value
//     for (i = 0; i < input; i += 1) {
//         amountEl.push(document.createElement('div'))
//         width += 10
//     }
//     return amountEl
// }

const btnCreate = document.querySelector('[data-create]')
const btDestroy = document.querySelector('[data-destroy]')
const boxesEl = document.getElementById('boxes')
const input = document.querySelector('input')

btnCreate.addEventListener('click', createBoxes)

function createBoxes(amount) {
    let num = 30;
    let array = []
    amount = input.value
    console.log(amount)
    for (let i = 1; i <= amount; i += 1) {
        const newDiv = document.createElement('div');
        num += 10;
        newDiv.style.width = `${num}px`;
        newDiv.style.height = `${num}px`;
        newDiv.style.backgroundColor = getRandomHexColor()
        array.push(newDiv);

    }
    boxesEl.append(...array)
}

btDestroy.addEventListener('click', () => {
    boxesEl.innerHTML = ""
})