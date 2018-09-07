import { loadRecipes, addRecipe, removeRecipe } from "./recipes";
import{renderRecipes} from './views'

loadRecipes()
renderRecipes()


document.querySelector("#add").addEventListener('click', (e) => {
    const recId = addRecipe()
    location.assign('./edit.html#' + recId)
})