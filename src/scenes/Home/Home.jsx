import Card from "../../components/Card/Card";
import LoadingCard from "../../components/Loading/LoadingCard/LoadingCard";
import useFetch from "../../hooks/useFetch";
import FetchError from "../../components/FetchError/FetchError";

export default function Home() {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&tags=vegetarian&number=8`;
  const { data, isLoading, isError } = useFetch(url);

  if (isLoading) {
    return <LoadingCard number={8} />
  } 

  if (isError) {
    return <FetchError />
  }
  
  return ( 
    <div className="cards-container">
      {data.recipes.map(item => {
        return <Card key={item.id} {...item} item={item} />
      })}
    </div>
  )
}