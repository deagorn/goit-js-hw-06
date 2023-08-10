const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsArr = [];

ingredients.forEach(ingredient => {
const ingredientEl = document.createElement("li");
ingredientEl.textContent = ingredient;
ingredientEl.classList = "item";

ingredientsArr.push(ingredientEl);
});

const list = document.querySelector('#ingredients');
list.append(...ingredientsArr);