function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color').addEventListener('click', changeColorBtn)

function changeColorBtn() {
  const changeColor = getRandomHexColor()
  document.querySelector('body').style.backgroundColor = changeColor
  document.querySelector('.color').textContent = changeColor
}