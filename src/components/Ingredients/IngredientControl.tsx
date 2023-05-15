import { IIngredient } from "../../types/types";
import styles from "./Ingredients.module.css";

interface Props {
  setIngredients: React.Dispatch<React.SetStateAction<IIngredient[]>>;
  ingredient: IIngredient;
  ingredients: IIngredient[];
}

const IngredientControl = ({
  ingredient,
  setIngredients,
  ingredients,
}: Props) => (
  <div className={styles.control}>
    {ingredient.name}
    <div className={styles.buttonsContainer}>
      <button
        onClick={() => {
          const idx = ingredients.findIndex(
            (item) => item.name === ingredient.name
          );
          setIngredients((current) =>
            current.filter((_, index) => index !== idx)
          );
        }}
      >
        -
      </button>
      <span>
        {ingredients.filter((item) => item.name === ingredient.name).length}
      </span>
      <button
        onClick={() => {
          setIngredients((current) => [ingredient, ...current]);
        }}
      >
        +
      </button>
    </div>
  </div>
);

export default IngredientControl;
