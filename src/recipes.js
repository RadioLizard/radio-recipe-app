import uuidv4 from 'uuid/v4'
import {renderRecipes} from './views'
let recipes = []

//Loads recipes from local storage
const loadRecipes = () => {
    const recipesJSON = localStorage.getItem('recipes')
    try{
        recipes = recipesJSON ? JSON.parse(recipesJSON) : []
    }
    catch(e){
        recipes = []
        console.log('oops!')
    }
}

//saves recipes to local storage
const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

//gives other .js files access to the recipes array
const getRecipes = () => recipes

//adds a recipe to the recipe array
const addRecipe = () => {
    let newRecipe = {
        id: uuidv4(),
        name: 'New Recipe',
        description: 'One heck of a good recipe!',
        instructions: [],
        ingredients: []
    }
    recipes.push(newRecipe)
    saveRecipes()
    renderRecipes()
    return newRecipe.id
}

//removes a recipe by id
//argument the id of the recipe to remove
const removeRecipe = (id) => {
    const deleteIndex = recipes.findIndex((recipe) => recipe.id === id)
    recipes.splice(deleteIndex, 1)
    saveRecipes()
}

export{ loadRecipes, addRecipe, getRecipes, removeRecipe, saveRecipes}