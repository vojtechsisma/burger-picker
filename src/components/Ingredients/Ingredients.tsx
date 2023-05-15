import styles from "./Ingredients.module.css";
import ingredientsJson from "../../data/ingredients.json";
import { IIngredient } from "../../types/types";
import IngredientControl from "./IngredientControl";

interface Props {
  setIngredients: React.Dispatch<React.SetStateAction<IIngredient[]>>;
  ingredients: IIngredient[];
}

const Ingredients = (props: Props) => {
  return (
    <div>
      <div className={styles.container}>
        <h2>Select ingredients</h2>
        <div className={styles.controlContainer}>
          {ingredientsJson.map((ingredient: IIngredient, index) => (
            <IngredientControl
              ingredient={ingredient}
              ingredients={props.ingredients}
              setIngredients={props.setIngredients}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
