import React, { useState } from "react";
import Burger from "./components/Burger";
import Ingredients from "./components/Ingredients";
import styles from "./App.module.css";
import { IIngredient } from "./types/types";
import Ticket from "./components/Ticket";

const App = () => {
  const [ingredients, setIngredients] = useState<IIngredient[]>([]);

  return (
    <div className={styles.container}>
      <Ingredients setIngredients={setIngredients} ingredients={ingredients} />
      <Burger ingredients={ingredients} />
      <Ticket ingredients={ingredients} />
    </div>
  );
};

export default App;
