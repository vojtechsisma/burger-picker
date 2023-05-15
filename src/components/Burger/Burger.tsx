import { IIngredient } from "../../types/types";
import Bacon from "../Bacon";
import BottomBun from "../BottomBun";
import Tomato from "../Tomato";
import TopBun from "../TopBun";
import styles from "./Burger.module.css";

interface Props {
  ingredients: IIngredient[];
}

const getIngredient = (ingredient: IIngredient, zIndex: number) => {
  switch (ingredient.name) {
    case "bacon":
      return <Bacon style={{ zIndex }} />;
    case "tomato":
      return (
        <Tomato
          style={{ zIndex }}
          tomatoStyle={{
            transform: `rotate3d(2, 0, -0.06, -0.2turn) rotate(${
              Math.random() * 180
            }deg)`,
          }}
        />
      );
  }
};

const Burger = (props: Props) => (
  <div>
    <div className={styles.burger}>
      <TopBun />
      {props.ingredients.map((ingredient, index) =>
        getIngredient(ingredient, props.ingredients.length - index)
      )}
      <BottomBun />
    </div>
  </div>
);

export default Burger;
