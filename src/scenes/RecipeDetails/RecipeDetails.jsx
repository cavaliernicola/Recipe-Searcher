import IngredientList from "../../components/Ingredient/IngredientList/IngredientList";
import InstructionList from "../../components/Instruction/InstructionList/InstructionList";
import Card from "../../components/Card/Card";
import "./RecipeDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import LoadingDetails from "../../components/Loading/LoadingDetails/LoadingDetails";
import useFetch from "../../hooks/useFetch";
import FetchError from "../../components/FetchError/FetchError";
import { IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function RecipeDetails() {
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=false`;  
  const { data: recipe, isLoading, isError } = useFetch(url);
  const navigate = useNavigate()

  // Dompurify automatically set the target to _self but we want it to be _blank, therefore we "secure" it.
  DOMPurify.addHook('afterSanitizeAttributes', node => {
    if ('target' in node) {
      node.setAttribute('target', "_blank");
      node.setAttribute('rel', 'noopener noreferrer');
    }
  })

  if (isLoading) {
    return <LoadingDetails />
  }

  if (isError) {
    return <FetchError />
  }

  return (
    <> 
      <div className="recipe-header">
        <IconButton onClick={() => navigate(-1) }><ArrowBackOutlinedIcon /></IconButton>
        <h1 className="recipe-title">{recipe.title}</h1>
      </div>

      <div className="card-container">
        <Card {...recipe} item={recipe} isDetailed={true}/>
      </div>

      <h2 className="paragraph-title">Description</h2>
      <p className="recipe-summary" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(recipe.summary)}} />

      <IngredientList recipe={recipe} />
      <InstructionList recipe={recipe} />
    </>
  )
}