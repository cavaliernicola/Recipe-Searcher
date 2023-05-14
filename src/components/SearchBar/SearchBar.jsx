import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.scss";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchBar() {
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    if (input) {
      navigate("../result/" + input)
      setInput("");
    }
  }

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-input-container">
          <input type="text" placeholder="Search a vegetarian recipe!" className="search-input" required onChange={(e) => setInput(e.target.value)} value={input} />
        </div>
        <button className="search-button" type='submit'>
          <SearchIcon className="search-icon"/>
        </button>
      </form>
    </div>
  )
}