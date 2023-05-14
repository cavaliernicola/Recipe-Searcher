import placeholder from "../../../assets/img/no-ingredient-placeholder.png";

export default function IngredientItem({ original, image, name }) {
  return (
    <div className="ingredient-container">
      <div className="ingredient-card">
        <img className="card-content" src={ image ? `https://spoonacular.com/cdn/ingredients_100x100/${image}` : placeholder} alt={name} />
        <p className="title">{original}</p>
      </div>
    </div>
  )
}