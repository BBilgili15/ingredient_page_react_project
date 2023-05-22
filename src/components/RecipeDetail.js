const RecipeDetail = ({selectedRecipe}) => {



  const tRecipe = selectedRecipe;

  const ingredientElements = selectedRecipe.recipe.ingredients.map((ingredient, index) => {
    let ingredientMeasure = '';
    if (ingredient.measure === '<unit>') {
      ingredientMeasure = ''
    } else {
      ingredientMeasure = ingredient.measure
    }

    let ingredientQuantity = ingredient.quantity.toFixed(2);
    if (ingredientQuantity === 0) {
      ingredientQuantity = ''
    } else {
      ingredientQuantity = ingredientQuantity
    }
    return (
      <li key={index}>{ingredient.quantity.toFixed(2)} {ingredientMeasure}: {ingredient.food}
      <button>+</button>
      </li>
    )
  })


  return (
    <div className="detail-container">
      <img src={tRecipe.recipe.image} />
      <div className="detail-title">
        <h2>{tRecipe.recipe.label}</h2>
        <p>Ingredients:</p>
        <ul>
          {ingredientElements}
        </ul>
        <button>Add All To Basket</button>

      </div>
    </div>
  
  )
}


export default RecipeDetail