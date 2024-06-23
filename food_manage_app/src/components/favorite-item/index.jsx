import "./style.css";

const FavoriteItem = (props) => {
  const { id, image, removeFromFavorites, title } = props;

  return (
    <div className="favorite-item" key={id}>
      <div>
        <img src={image} alt="image of recipe" />
      </div>
      <p>{title}</p>
      <button type="button" onClick={removeFromFavorites}>
        Remove from favorites
      </button>
    </div>
  );
};

export default FavoriteItem;
