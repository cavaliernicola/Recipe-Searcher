import { useEffect, useState } from "react";
import IngredientItem from "../IngredientItem/IngredientItem";
import "./IngredientList.scss";

export default function IngredientList({ recipe }) {
  const [scrollbar, setScrollbar] = useState(false);

  useEffect(() => {
    // Make sure to show the elements in a decent way when there are not enough elements for a scrollbar.  
    function handleResize() {
      setScrollbar(element.scrollWidth > element.clientWidth);
    }

    const element = document.querySelector(".ingredients-list");
    if (element) {
      new ResizeObserver(handleResize).observe(element);
    }
  }, [])

  return (
    <>
      {recipe?.extendedIngredients && (
        <>
          <h2 className="paragraph-title">Ingredients</h2>
          <div className={"ingredients-list" + (!scrollbar ? " scroll-bar-hidden" : "")} >
            {recipe?.extendedIngredients?.map((ingredient, index) => (
              // we can't use ingredient.id as key because it's not reliable to be unique, as it happens for /recipe/642548
              <IngredientItem key={index} {...ingredient} />
            ))}
          </div>
        </>
      )}
    </>
  )
}