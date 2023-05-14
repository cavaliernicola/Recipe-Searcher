import Accordion from "@mui/material/Accordion"; 
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails"; 
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

export default function FAQ() {
  return (
    <>
      <h2 className="general-header" style={{ marginBottom: "20px"}}>Frequently Asked Questions</h2>

      <Accordion defaultExpanded className="accordion">
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <h3>Why I see "An error happened"?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>This app uses free plan of <a href="https://spoonacular.com/food-api/docs">Spoonacular Api</a>, and it has a limited api usage, if you see such banner it's likely that the app hit the limit already.</p>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded className="accordion">
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <h3>Can I sync the recipes I save with my other devices?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>No, at the moment there is no way to sync your favorite recipes with other devices.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="accordion">
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <h3>Why the recipes I saved disappeared?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>Favorite recipes are saved locally, therefore if you clear the history of your browser you will lose them.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="accordion">
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <h3>Where can I report bugs/suggest new features?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>This project is open source, you can open an issue in the dedicated <a href="https://github.com/cavaliernicola/Recipe-Searcher" target="_blank" rel="noopener noreferrer">github page</a>.</p>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className="accordion">
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
          <h3>Who made this application?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>This application was made by <a href="https://cavaliernicola.github.io/Personal-Website" target="_blank" rel="noopener noreferrer">Nicola Cavalier</a> with the only purpose to practice React, a popular Javascript Library.</p>
        </AccordionDetails>
      </Accordion>
    </>
  )
}