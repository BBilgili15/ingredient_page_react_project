import {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList';
import RecipeDetail from '../components/RecipeDetail';
import { myKey, myAppId } from '../hidden';

const RecipeContainer = () => {

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = function(){
      fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=7cd020e2&app_key=5e0f91f9aa28a1e3d06a00b8d858104e&dishType=Main%20course')
      .then(res => res.json())
      .then(recipes => setRecipes(recipes.hits))
  }


  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe)
  }

  return (
    <div>
      <h1>Ingredient Shopper</h1>
      <div>{selectedRecipe !== null ? <RecipeDetail selectedRecipe={selectedRecipe} /> : <p>Select a recipe...</p>}</div>
      <RecipeList recipes={recipes} selectRecipe={selectRecipe} setIsHover={setIsHover} isHover={isHover}/> 
    </div>
  
  )
}


export default RecipeContainer











