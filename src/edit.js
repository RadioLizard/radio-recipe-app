 //////////////////////////////
//////~*SETUP SECTION*~////////
///////////////////////////// 
import {loadRecipes, getRecipes, removeRecipe, saveRecipes} from './recipes'

loadRecipes()

 //adding page title based on Recipe name
const recipes = getRecipes()
const recipeId = location.hash.substring(1)
const recipe = recipes.find((recipe) => recipe.id === recipeId)
if(!recipe){
     location.assign('./index.html')
}
const titleEl = document.querySelector('#title')
titleEl.textContent = recipe.name



 //////////////////////////////
////~*RECIPE NAME SECTION*~////
///////////////////////////// 

//locating the name element and name edit element   
const nameEl = document.querySelector('#name')
const nameChanger = document.querySelector('#name-change')
    
//initialize recipe name
nameEl.textContent = recipe.name

//Watching for updates to the title
nameChanger.addEventListener('input', (e) => {
    recipe.name = e.target.value
    titleEl.textContent = recipe.name
    nameEl.textContent = recipe.name
    saveRecipes()
})



  ///////////////////////////////////
///~*RECIPE DESCRIPTION SECTION*~////
/////////////////////////////////// 

//locating the description element and description changer element
const descEl = document.querySelector('#description')
const descChanger = document.querySelector('#desc-change')

//initialize recipe desc
descEl.textContent = recipe.description

//listen for changes to the description
descChanger.addEventListener('input', (e) => {
    recipe.description = e.target.value
    descEl.textContent = recipe.description
    saveRecipes()
})


 //////////////////////////////
////~*INSTRUCTIONS SECTION*~///
///////////////////////////// 

//locating the div element to hold the instructions
const instructionsEl = document.querySelector('#instructions')

//initialize existing instructions function
const generateInstructionsDom = (instruction) => {
    //create elements in each instruction box
    let instructionContainer = document.createElement('div')
    let instructionPrint = document.createElement('p')
    let instructionDel = document.createElement('button')
    //setting the instruction and applying it to the parent element
    instructionPrint.textContent = instruction
    instructionContainer.appendChild(instructionPrint)
    //setting the delete button and applying it to the parent element
    instructionDel.textContent = ' X '
    instructionDel.classList.add('iButton')
    instructionPrint.appendChild(instructionDel)
    //set the event listener 
    instructionDel.addEventListener('click', (e) => {
        removeInstruction(instruction)
        saveRecipes()
    })
    instructionsEl.appendChild(instructionContainer)
}

//Using the page's recipe to remove individual instructions
const removeInstruction =  (id) => {
const instructionIndex = recipe.instructions.findIndex((instruction) => instruction === id)
if (instructionIndex > -1) {
    recipe.instructions.splice(instructionIndex, 1)
    console.log(recipe.instructions)
    saveRecipes()
    renderInstructions()
}
}

//Using the generateDom to generate an item for each instruction
const renderInstructions = () =>  {
    if (recipe.instructions.length > -1){

        //Clear instructions element    
        instructionsEl.innerHTML = ''
        recipe.instructions.forEach((instruction) => {
            generateInstructionsDom(instruction)
        })
    }   
}

    
//Wiring up add Instruction button
document.querySelector('#instruction-add').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.getItem.value.trim()
    if (text.length > 0){
    recipe.instructions.push(text)
    renderInstructions()
    saveRecipes()
    e.target.getItem.value = ''
}
})

renderInstructions()

 //////////////////////////////
////~*INGREDIENTS SECTION*~////
/////////////////////////////

//locating the div to hold the ingredients
const ingredientsEl = document.querySelector('#ingredients')

//initialize existing ingredients function 
const generateIngredientsDom = (ingredient) => {
    //create elements in each instruction box
    let ingredientContainer = document.createElement('div')
    let ingredientPrint = document.createElement('p')
    let ingredientDel = document.createElement('button')
    //setting the instruction and applying it to the parent element
    ingredientPrint.textContent = ingredient
    ingredientContainer.appendChild(ingredientPrint)
    //setting the delete button and applying it to the parent element
    ingredientDel.textContent = ' X '
    ingredientDel.classList.add('iButton')
    ingredientPrint.appendChild(ingredientDel)
    //set the event listener 
    ingredientDel.addEventListener('click', (e) => {
        removeIngredient(ingredient)
        saveRecipes()
    })
    ingredientsEl.appendChild(ingredientContainer)
}

//Using the page's recipe to remove individual ingredients
const removeIngredient =  (id) => {
    const ingredientIndex = recipe.ingredients.findIndex((ingredient) => ingredient === id)
    if (ingredientIndex > -1) {
        recipe.ingredients.splice(ingredientIndex, 1)
        saveRecipes()
        renderIngredients()
    }
}

//Using the generateDom to generate an item for each ingredient
const renderIngredients = () =>  {
    if (recipe.ingredients.length > -1){
    //Clear instructions element    
        ingredientsEl.innerHTML = ''
        recipe.ingredients.forEach((ingredient) => {
            generateIngredientsDom(ingredient)
        })
    }
}

    //Wiring up add Ingredient Button
document.querySelector('#ingredient-add').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.getItem2.value.trim()
    if (text.length > 0){
        recipe.ingredients.push(text)
        renderIngredients()
        saveRecipes()
        e.target.getItem2.value = ''
    }  
})


renderIngredients()

  //////////////////////////////
////~*DELETE RECIPE SECTION*~///
//////////////////////////////
const delButton = document.querySelector('#delete')


//Wiring up delete button
delButton.addEventListener('click', (e) => {
    removeRecipe(recipe.id)
    location.assign('/index.html')
})

