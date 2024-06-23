import Search from "../../components/search";
import { useEffect, useReducer, useState } from "react";
import "./style.css";
import RecipesItem from "../../components/recepies items"; 
import FavoriteItem from "../../components/favorite-item";

const reducer = (state, action) => {
  switch(action.type){
    case 'filterFavorites':
      return {
        ...state,
        filterValue: action.value
      };
    default:
      return state;
  }
};

const initialState = {
  filterValue: ''
};

const Homepage = () => {
  const [loadingState, setLoadingState] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [apiCalledSuccess, setApiCalledSuccess] = useState(false);
  const [filteredState, dispatch] = useReducer(reducer, initialState);

  const getdatafromSearchComponent = (getData) => {
    setLoadingState(true);

    async function getReceipes() {
      const apiResponse = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=6c4aa2f66c1d4e889949634c7a1869f9&query=${getData}`
      );
      const result = await apiResponse.json();
      const { results } = result;

      if (results && results.length > 0) {
        setLoadingState(false);
        setRecipes(results);
        setApiCalledSuccess(true);
      } 
    }

    getReceipes();
  };

  const addToFavorites = (getCurrentRecipeItem) => {
    const cpyFavorites = [...favorites];
    const index = cpyFavorites.findIndex(
      (item) => item.id === getCurrentRecipeItem.id
    );

    if (index === -1) {
      cpyFavorites.push(getCurrentRecipeItem);
      setFavorites(cpyFavorites);
      localStorage.setItem("favorites", JSON.stringify(cpyFavorites));
    } else {
      alert("Item is already in favorites");
    }
  };

  const removeFromFavorites = (id) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const extractFavoritesFromLocalStorageOnPageLoad = JSON.parse(
      localStorage.getItem("favorites")
    );
    
      setFavorites(extractFavoritesFromLocalStorageOnPageLoad);
    
  }, []);

  console.log(filteredState, "filteredState");

  //filter the favorites
  const filteredFavoritesItems = favorites.filter(item => 
    item.title.toLowerCase().includes(filteredState.filteredValue)
  );

  const handleFilterChange = (event) => {
    dispatch({ type: 'filterFavorites', value: event.target.value });
  };

  const filteredFavorites = favorites.filter(item =>
    item.title.toLowerCase().includes(filteredState.filterValue.toLowerCase())
  );

  return (
    <div className="homepage">
      <Search 
        getdatafromSearchComponent={getdatafromSearchComponent} 
        apiCalledSuccess={apiCalledSuccess}
        setApiCalledSuccess={setApiCalledSuccess}
      />

      <div className="favorites-wrapper">
        <h1 className="favorites-title">My Favorites</h1>

        <div className="search-favorite">
          <input 
            onChange={handleFilterChange}
            name="searchfavorites"
            placeholder="Search Your Favorites"
          />
        </div>

        <div className="favorites items-container">
          {filteredFavorites && filteredFavorites.length > 0
            ? filteredFavorites.map((item) => (
                <FavoriteItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  removeFromFavorites={() => removeFromFavorites(item.id)}
                />
              ))
            : null}
        </div>
       
        <hr />
      </div>

      {loadingState && (
        <div className="loading">Loading recipes! Please wait.</div>
      )}

      <div className="items-container">
        {recipes && recipes.length > 0
          ? recipes.map((item) => (
              <RecipesItem
                addToFavorites={() => addToFavorites(item)}
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Homepage;
