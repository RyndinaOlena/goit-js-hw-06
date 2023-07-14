const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const cookDish = ingredients.map((ingrid) => {
  const dishEl = document.createElement('li')
  dishEl.textContent = ingrid
  dishEl.classList.add('item')
  return dishEl
})

document.getElementById('ingredients').append(...cookDish)