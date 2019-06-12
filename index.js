var recipes = [];

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function init() {
  //put any page initialization/handlebars initialization here
  var recipeFormTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  var formHTML = recipeFormTemplate();
  var mainContainer = document.getElementsByTagName('main')[0];
  mainContainer.innerHTML += formHTML;

  var recipesContainer = '<div id=\'recipes\'></div>';
  mainContainer.innerHTML += recipesContainer;

  //move this to where 'this' object is defined?
  Handlebars.registerHelper('displayIngredient',function(this){
    let displayIngredients = '';
    this.forEach(function(ingredient){
      let newIngredient = '<li name="ingredients">'+ingredient+'</li>';
      displayIngredients += newIngredient;
    })
    return new Handlebars.SafeString(displayIngredients);
  })

  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById('recipe-details-partial').innerHTML);


}

function handleSubmit(){
  let recipeName = document.getElementById("recipe-name").value;
  let recipeDescr = document.getElementById("recipe-descr").value;
  let displayIngredients = [];

  document.getElementsByName('ingredient').forEach(function(ingredient){
    displayIngredients.push(ingredient.value);
  });

  let recipe = {
    name: recipeName,
    description: recipeDescr,
    ingredients: diplayIngredients
  };

  recipes.push(recipe);



  let recipeTemplate = document.getElementById('recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  let recipeHTML = recipeTemplateFn(recipe);

  document.getElementById('recipes').innerHTML += recipeHTML;
}


function displayEditForm(){

}
