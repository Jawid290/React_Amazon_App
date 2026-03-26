import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://www.karooya.com/blog/wp-content/uploads/2018/12/AmazonAdvertising.png"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your basket is empty</h2>
          <p>
            You hav no items in ypur basket. To buy one "Add to basket" next to
            the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping Bestket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
