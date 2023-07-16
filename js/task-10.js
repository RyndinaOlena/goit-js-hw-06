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