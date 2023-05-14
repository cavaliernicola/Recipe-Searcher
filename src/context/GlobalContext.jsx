import { useState, useContext, createContext, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")) || []);
  // const [favorites, setFavorites] = useState([]);
  
  function checkIsFavorite(id) {
    return favorites.find(item => item.id === id);
  }
  
  function handleFavorite(card) {
    const isFavorite = checkIsFavorite(card.id);
    if (isFavorite) {
      setFavorites(prevFav => prevFav.filter(item => item.id !== card.id));
    } else {
      setFavorites(prevFav => [...prevFav, { ...card }]);
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
    // localStorage.setItem("favorites", JSON.stringify([]))
  }, [favorites])

  return (
    <AppContext.Provider value={{ favorites, checkIsFavorite, handleFavorite }} >
      {children}
    </AppContext.Provider>
  )
}

export function useGlobalContext() {
  return useContext(AppContext);
}