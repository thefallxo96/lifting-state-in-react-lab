import PropTypes from "prop-types";
import Ingredient from "../Ingredient/Ingredient";
import "./IngredientList.css";

const IngredientList = ({ ingredients, addIngredient, burger }) => {
  const hasBun = burger.some((item) => item.name.toLowerCase().includes("bun"));

  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, idx) => {
        const isBun = ingredient.name.toLowerCase().includes("bun");
        const disabled = isBun && hasBun && !burger.some((b) => b.name === ingredient.name);

        return (
          <Ingredient
            key={idx}
            ingredient={ingredient}
            onClick={addIngredient}
            type="add"
            disabled={disabled}
          />
        );
      })}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  addIngredient: PropTypes.func.isRequired,
  burger: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default IngredientList;
