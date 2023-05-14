import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import LoadingCard from "../../components/Loading/LoadingCard/LoadingCard";
import Card from "../../components/Card/Card";
import placeholder from "../../assets/img/no-results.png";
import FetchError from "../../components/FetchError/FetchError";

export default function ShowResults() {
  const { query } = useParams()
  const { recipes, isLoading, isError } = useSearch(query);

  if (isLoading) {
    return <LoadingCard number={8} />
  }

  if (isError) {
    return <FetchError />
  }

  return (
    <>
      {recipes.length > 0 ? (
        <>
          <h2 className="general-header">The result of your search:</h2>
          <div className="cards-container">
            {recipes.map(item => {
              return <Card key={item.id} {...item} item={item} />
           })}
          </div>
        </>
      ) : (
        <>
          <h2 className="general-header">The search didn't provide any result!</h2>
          <div className="empty-content" style={{ backgroundImage: `url(${placeholder})`}} />
        </>
      )}
    </>
  )
}