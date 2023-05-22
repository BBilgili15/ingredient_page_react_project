const RecipeList = ({recipes, selectRecipe, setIsHover, isHover}) => {

  const recipeElements = recipes.map((recipe, index) => {
    return (
      <li key={index} className='recipe-card' onClick={() => {selectRecipe(recipe)}} onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}} >
           
          <div className="image-text">
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <p>Cook Time: {recipe.recipe.totalTime === 0 ? '-' : recipe.recipe.totalTime + ' minutes'} </p>
            <p>Cuisine: <span className="cuisine-type">{recipe.recipe.cuisineType}</span></p> 
          </div> 
          
        <div className="card-image-container">
          <img src={recipe.recipe.image} className='recipe-image'/>
        </div>
        <div className="recipe-card-title-container">
          <p className="recipe-card-title">{recipe.recipe.label}</p>
        </div>
        <div className="dietary-info">
            {recipe.recipe.healthLabels.includes('Vegetarian') ? <div className="green-v"><p className="letter">V</p></div> : <></> }
            {recipe.recipe.healthLabels.includes('Gluten-Free') ? <div className="yellow-g"><p className="letter">G</p></div> : <></> }
            {recipe.recipe.healthLabels.includes('Vegan') ? <div className="blue-v"><p className="letter">V</p></div> : <></> }
          </div>
      </li>
    )
  })

  return (
    <div>
      <ul className="recipe-card-container">
        {recipeElements}
      </ul>
    </div>
  
  )
}

export default RecipeList