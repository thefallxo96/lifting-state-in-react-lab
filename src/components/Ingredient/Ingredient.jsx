import PropTypes from "prop-types";
import "./Ingredient.css";

const Ingredient = ({ ingredient, onClick, type, disabled }) => {
  return (
    <li
      className={`ingredient-item ${disabled ? "disabled" : ""}`}
      style={{ backgroundColor: ingredient.color }}
    >
      {ingredient.name}
      {type === "add" && (
        <button onClick={() => onClick(ingredient)} disabled={disabled}>
          +
        </button>
      )}
      {type === "remove" && (
        <button onClick={() => onClick()} className="remove-btn">
          X
        </button>
      )}
    </li>
  );
};

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["add", "remove"]).isRequired,
  disabled: PropTypes.bool,
};

Ingredient.defaultProps = {
  disabled: false,
};

export default Ingredient;
