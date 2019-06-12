var recipes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplateFn = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var formHTML = recipeFormTemplateFn({
    name: '',
    recipeDescr: '',
    ingredients:['','','','','']
  });
  var mainContainer = document.getElementsByTagName('main')[0];
  mainContainer.innerHTML += formHTML;

  var recipesContainer = '<div id=\'recipes\'></div>';
  mainContainer.innerHTML += recipesContainer;

  //move this to where 'this' object is defined?
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient',function(ingredient){
    let newIngredient = '<li name="ingredients">'+ingredient+'</li>';
    return new Handlebars.SafeString(newIngredient);
  })




}

function handleSubmit(){
  let recipeName = document.getElementById("recipe-name").value;
  let recipeDescr = document.getElementById("recipe-descr").value;
  let allIngredients = [];

  document.getElementsByName('ingredient').forEach(function(ingredient){
    allIngredients.push(ingredient.value);
  });

  let recipe = {
    name: recipeName,
    description: recipeDescr,
    ingredients: allIngredients
  };

  recipes.push(recipe);

  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  let recipeHTML = recipeTemplateFn(recipe);

  document.getElementById('recipes').innerHTML += recipeHTML;
}


function displayEditForm(){
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);

  let recipe = {};

  recipe.name = document.getElementById('recipeName').innerHTML;
  recipe.recipeDescr = document.getElementById('recipeDescription').innerHTML;
  recipe.ingredients = [];

  document.getElementsByName('ingredients').forEach(function(ingredient){
    recipe.ingredients.push(ingredient.innerHTML);
  });

  let recipeFormHTML = recipeFormTemplateFn(recipe);
}
