import { useContext, useEffect, useState } from "react";
import "./style.css";
import { ThemeContext } from "../../App";

const Search = (props) => {
  const { theme } = useContext(ThemeContext);
  const { getdatafromSearchComponent, apiCalledSuccess, setApiCalledSuccess } = props;

  const [inputValue, setinputValue] = useState("");
  const handleinputvalue = (event) => {
    const { value } = event.target;
    setinputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getdatafromSearchComponent(inputValue);
  };

  useEffect(() => {
    if (apiCalledSuccess) {
      setinputValue("");
      setApiCalledSuccess(false);
    }
  }, [apiCalledSuccess, setApiCalledSuccess]);

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search Recipes"
          id="search"
          onChange={handleinputvalue}
          value={inputValue}
        />
        <button style={theme ? { backgroundColor: '#12343b' } : {}} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
