import { useEffect, useState } from 'react';
import './style.css';

const Search = (props) => {
    const {getdatafromSearchComponent, ApiCalledSuccess, setApiCalledSuccess} = props; 

    const [inputValue, setinputValue] = useState('');
    const handleinputvalue = (event) =>{
        const {value} = event.target;
        setinputValue(value);
    }
    console.log(inputValue);

    const handleSubmit = (event) => {
        event.preventDefault();
        getdatafromSearchComponent(inputValue);
        // console.log(inputValue);
    }

    useEffect(() =>{
      if(ApiCalledSuccess){
        setinputValue('')
        setApiCalledSuccess(false);
      }

    },[ApiCalledSuccess]);

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
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
