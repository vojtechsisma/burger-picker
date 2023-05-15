import { IIngredient } from "../types/types";

const calculatePrice = (ingredients: IIngredient[], initialValue: number) => {
  if (!ingredients.length) {
    return initialValue;
  }

  const price = ingredients.reduce((acc, ingredient) => ({
    price: acc.price + ingredient.price,
    name: "",
  })).price;

  return Math.round((price + initialValue + Number.EPSILON) * 100) / 100;
};

export default calculatePrice;
