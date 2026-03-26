import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <h1>The total price is:</h1>
      <h3>{getBasketTotal(basket).toFixed(2)}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
