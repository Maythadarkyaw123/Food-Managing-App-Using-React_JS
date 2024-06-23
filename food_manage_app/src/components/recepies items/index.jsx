import "./style.css";

const RecipesItem = (props) => {
  const { id, image, title, addToFavorites } = props;
  return (
    <div className="recipe-item" key={id}>
      <div>
        <img src={image} alt="image of recipe" />
      </div>
      <p>{title}</p>
      <button type="button" onClick={addToFavorites}>
        Add to favorites
      </button>
    </div>
  );
};

export default RecipesItem;


