import { useState } from "react";
import PropTypes from "prop-types";
import Ingredient from "../Ingredient/Ingredient";
import "./BurgerStack.css";

const BurgerStack = ({ burger, removeIngredient }) => {
  const defaultBun = { name: "Kaiser Bun", color: "saddlebrown" };
  const [removingIndex, setRemovingIndex] = useState(null);

  const topBun =
    burger.find((item) => item.name.toLowerCase().includes("bun")) || defaultBun;
  const bottomBun = topBun;
  const fillings = burger.filter((item) => !item.name.toLowerCase().includes("bun"));

  const handleRemove = (index) => {
    setRemovingIndex(index);
    setTimeout(() => {
      removeIngredient(index);
      setRemovingIndex(null);
    }, 300);
  };

  return (
    <div className="burger-stack">
      <div className="bun top-bun" style={{ backgroundColor: topBun.color }}>
        {topBun.name}
      </div>

    {fillings.map((item) => {
  const stackIndex = burger.findIndex(
    (b) => b.name === item.name && b.color === item.color
  );

  return (
    <li
      key={stackIndex}
      className={`filling-item ${removingIndex === stackIndex ? "removing" : ""}`}
      style={{ backgroundColor: item.color }}
    >
      <Ingredient
        ingredient={item}
        onClick={() => handleRemove(stackIndex)}
        type="remove"
      />
    </li>
  );
})}



      <div className="bun bottom-bun" style={{ backgroundColor: bottomBun.color }}>
        {bottomBun.name}
      </div>
    </div>
  );
};

BurgerStack.propTypes = {
  burger: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeIngredient: PropTypes.func.isRequired,
};

export default BurgerStack;
