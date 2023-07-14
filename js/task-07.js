const fontValue = document.getElementById('font-size-control')
fontValue.addEventListener('input', changeFontSize)
function changeFontSize(e) {
    const sizeText = e.target.value
    const spanEl = document.getElementById('text').style.fontSize = `${sizeText}px`
}