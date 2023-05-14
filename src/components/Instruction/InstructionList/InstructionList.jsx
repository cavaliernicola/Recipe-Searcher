import InstructionItem from "../InstructionItem/InstructionItem";
import "./InstructionList.scss";

export default function InstructionList({ recipe}) {
  return (
    <>
      {recipe?.analyzedInstructions?.[0]?.steps && (
        <>
          <h2 className="paragraph-title">Instructions</h2>
          <div className="instructions-list">
            {recipe?.analyzedInstructions?.[0]?.steps.map((instruction, i) => (
              <InstructionItem key={i} {...instruction} />
            ))}    
          </div>
        </>
      )}
    </>
  )
}