import { useState } from 'react';
import './style.css';

const Search = () => {
    const [inputValue, setinputValue] = useState('');
    const handleinputvalue = (event) =>{
        const {value} = event.target;
        setinputValue(value);
    }
    console.log(inputValue);

  return (
    <div className="Search">
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Search Receipes"
          id="search"
          onChange={handleinputvalue}
          value={inputValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
