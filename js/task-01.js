const categoriesEl = document.querySelectorAll('#categories .item')
const itemEl = categoriesEl.length
console.log(`Number of categories: ${itemEl}\n\n`)

categoriesEl.forEach((el) => {
    const titleEl = el.querySelector('h2').textContent
    console.log(`Category: ${titleEl}`)

    const animalEl = el.querySelectorAll('li').length
    console.log(`Elements: ${animalEl}\n\n`)
})