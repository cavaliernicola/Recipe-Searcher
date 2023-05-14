export default function IngredientItem({ original, image, name }) {
  return (
    <div className="ingredient-container">
      <div className="ingredient-card">
        <img className="card-content" src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`} alt={name} />
        <p className="title">{original}</p>
      </div>
    </div>
  )
}