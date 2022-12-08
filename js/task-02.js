const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
(function () {

  const ulIngredients = document.querySelector("#ingredients");

  const listEls = ingredients.forEach((ingredient) => {
    const liItemRef = document.createElement('li');
    liItemRef.innerText = ingredient;



    ulIngredients.appendChild(liItemRef)
  })

})();
