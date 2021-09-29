const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const itemIngredients = [];
const ingredientsElement = document.querySelector("#ingredients");

ingredients.map(element => {
  const item = document.createElement("li");
  item.textContent = element;
  itemIngredients.push(item);
})

ingredientsElement.append(...itemIngredients);
