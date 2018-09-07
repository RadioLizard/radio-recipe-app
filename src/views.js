import { getRecipes } from "./recipes"
//generates the recipe dom for a single recipe
const generateRecipeDOM = (recipe) => {
    const recipeEl = document.createElement('a')
    const titleEl = document.createElement('p')
    const descriptionEl = document.createElement('p')
    const finalEl = document.createElement('div')

      //Assign unique URL based on the generated ID of the recipe
      recipeEl.setAttribute('href', `edit.html#${recipe.id}`)

    //setup the recipe name
    titleEl.classList.add('recipe-title-index')
    if (recipe.name.length > 0){
        titleEl.textContent = recipe.name
    }
    else{
        textEl.textContent = 'Unnamed Recipe'
    }
    recipeEl.appendChild(titleEl)

    //setup the ingredients status
        descriptionEl.textContent = `"${recipe.description}"`

   
    
    recipeEl.appendChild(descriptionEl)
    finalEl.appendChild(recipeEl)
    finalEl.classList.add('recipe-holder')

    return finalEl
}

//renders the list of recipes 
const renderRecipes = () => {
    const recipesEl = document.querySelector('#recipes')
    const recipes = getRecipes()
    recipesEl.innerHTML = ''

    if(recipes.length > 0){
        recipes.forEach((recipe) => {
            const recipeEl = generateRecipeDOM(recipe)
            recipesEl.appendChild(recipeEl)
        })
    }
}






export {renderRecipes }