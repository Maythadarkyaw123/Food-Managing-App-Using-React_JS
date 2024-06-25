import { useContext } from "react";
import "./style.css";
import { ThemeContext } from "../../App";

const RecipesItem = (props) => {
  const { theme } = useContext(ThemeContext);
  const { id, image, title, addToFavorites } = props;

  return (
    <div className="recipe-item" key={id}>
      <div>
        <img src={image} alt="image of recipe" />
      </div>
      <p style={theme ? { color: '#12343b' } : {}}>{title}</p>
      <button
        style={theme ? { backgroundColor: '#12343b' } : {}}
        type="button"
        onClick={addToFavorites}
      >
        Add to favorites
      </button>
    </div>
  );
};

export default RecipesItem;
