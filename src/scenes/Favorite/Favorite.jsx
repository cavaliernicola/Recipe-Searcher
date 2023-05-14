import Card from "../../components/Card/Card";
import { useGlobalContext } from "../../context/GlobalContext";
import placeholder from "../../assets/img/no-favorite.png";

export default function Favorites() {
  const { favorites } = useGlobalContext();

  return (
    <>
      {
        favorites.length > 0 ? (
          <>
            <h2 className="general-header">Your favorite recipes:</h2>
            <div className="cards-container">
              {favorites.map(item => {
                return <Card key={item.id} {...item} item={item} />
              })}
            </div>
          </>
        ) : (
          <> 
            <h2 className="general-header">You haven't saved any favorite recipe!</h2>
            <div className="empty-content" style={{ backgroundImage: `url(${placeholder})`}} />
          </>
        )
      }
    </>
  )
}