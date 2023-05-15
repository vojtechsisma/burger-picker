import { IIngredient } from "../../types/types";
import calculatePrice from "../../utils/calculatePrice";
import styles from "./Ticket.module.css";

interface Props {
  ingredients: IIngredient[];
}

const Ticket = (props: Props) => (
  <div>
    <div className={styles.container}>
      <h2>Your ticket</h2>
      <div className={styles.ticketContainer}>
        <div className={styles.ticketHeader}>
          <p>BEST BURGER</p>
          <p>{new Date().toLocaleString("cs-CZ")}</p>
        </div>
        <div className={styles.ticketLine}>
          <span>Bun</span>
          <span>5</span>
        </div>
        {props.ingredients.map((ingredient: IIngredient, index) => (
          <div className={styles.ticketLine}>
            <span>{ingredient.name}</span>
            <span>{ingredient.price}</span>
          </div>
        ))}
        <div className={styles.total}>
          <span>TOTAL:</span>
          <span>{calculatePrice(props.ingredients, 5)}</span>
        </div>
      </div>
    </div>
  </div>
);

export default Ticket;
