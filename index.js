var recipes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplateFn = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var formHTML = recipeFormTemplateFn({
    ingredients:['','','','','']
  });
  var mainContainer = document.getElementsByTagName('main')[0];
  mainContainer.innerHTML = formHTML;

  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient',function(ingredient){
    let newIngredient = '<li name="ingredients">'+ingredient+'</li>';
    return new Handlebars.SafeString(newIngredient);
  })




}

function handleSubmit(){
  let recipeName = document.getElementById("name").value;
  let recipeDescr = document.getElementById("description").value;
  let allIngredients = [];

  let ingredientNodes = document.getElementsByName('ingredients');
  for (var i=0; i < ingredientNodes.length; i++){
    allIngredients.push(ingredientNodes[i].value)
  }

  let recipe = {
    name: recipeName,
    description: recipeDescr,
    ingredients: allIngredients
  };

  recipes.push(recipe);

  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  let recipeHTML = recipeTemplateFn(recipe);

  document.getElementById('main').innerHTML = recipeHTML;
}


function displayEditForm(){
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);

  let recipe = {};

  recipe.name = document.getElementById('recipeName').innerHTML;
  recipe.description = document.getElementById('recipeDescription').innerHTML;
  let allIngredients = [];

  let ingredientNodes = document.getElementsByName('ingredients');
  for (var i=0; i < ingredientNodes.length ; i++){
    allIngredients.push(ingredientNodes[i].innerHTML);
  }

  recipe.ingredients = allIngredients;
  let recipeFormHTML = recipeFormTemplateFn(recipe);

  document.getElementById('main').innerHTML = recipeFormHTML;
}
