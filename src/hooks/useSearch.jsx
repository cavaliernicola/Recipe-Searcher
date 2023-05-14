import axios from "axios";
import { useState, useEffect } from "react";

export default function useSearch(query) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function downloadRecipes() {
      setIsLoading(true);
      setIsError(false);

      try {
        const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&number=8&query=${query}&diet=vegetarian`;
        let searchData = await axios.get(searchUrl);
                
        const recipesId = searchData?.data?.results?.map((recipe) => recipe.id).toString();

        const recipesUrl = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${import.meta.env.VITE_API_KEY}&ids=${recipesId}`
        let recipesData = await axios.get(recipesUrl);

        setRecipes(recipesData.data)
        setIsLoading(false)
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }

    downloadRecipes();
  }, [query])

  return { recipes, isLoading, isError};

}