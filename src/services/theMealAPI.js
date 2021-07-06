export const fetchCategories = async (endpoint) => {
  const response = await fetch(endpoint);
  const categories = await response.json();
  const categoriesAmount = 4;

  return Object.values(categories)[0]
    .filter((category, index) => index <= categoriesAmount);
};

export const fetchRecipes = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();
  const recipesAmount = 11;

  return Object.values(recipes)[0]
    .filter((recipe, index) => index <= recipesAmount);
};

export const fetchRecipeDetails = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipeDetails = await response.json();

  return Object.values(recipeDetails)[0][0];
};

export const fetchUrlRadioButtons = async (endpoint) => {
  const response = await fetch(endpoint);
  const recipes = await response.json();

  return recipes;
};
